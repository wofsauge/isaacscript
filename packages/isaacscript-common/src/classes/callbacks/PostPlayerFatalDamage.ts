import {
  ActiveSlot,
  BossID,
  CollectibleType,
  DamageFlag,
  DamageFlagZero,
  ModCallback,
  UseFlag,
} from "isaac-typescript-definitions";
import { game } from "../../core/cachedClasses";
import { ModCallbackCustom } from "../../enums/ModCallbackCustom";
import {
  mapGetPlayer,
  mapSetPlayer,
} from "../../functions/playerDataStructures";
import { isChildPlayer } from "../../functions/playerIndex";
import {
  isDamageToPlayerFatal,
  willPlayerRevive,
} from "../../functions/revive";
import { inBossRoomOf } from "../../functions/rooms";
import { shouldFirePlayer } from "../../shouldFire";
import { PlayerIndex } from "../../types/PlayerIndex";
import { CustomCallback } from "../private/CustomCallback";

export class PostPlayerFatalDamage extends CustomCallback<ModCallbackCustom.POST_PLAYER_FATAL_DAMAGE> {
  public override v = {
    run: {
      /** Needed to detect if Glass Cannon will kill the player or not. */
      playersLastDamageGameFrame: new Map<PlayerIndex, int>(),
    },
  };

  constructor() {
    super();

    this.callbacksUsed = [
      // 23
      [ModCallback.PRE_USE_ITEM, this.preUseItemBible, [CollectibleType.BIBLE]],
    ];

    this.customCallbacksUsed = [
      [ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER, this.entityTakeDmgPlayer],
    ];
  }

  protected override shouldFire = shouldFirePlayer;

  /**
   * Using The Bible on Satan is one of the few ways to die without taking damage, so we need to
   * handle this case.
   */
  // ModCallback.PRE_USE_ITEM (23)
  // CollectibleType.BIBLE (33)
  private preUseItemBible = (
    _collectibleType: CollectibleType,
    _rng: RNG,
    player: EntityPlayer,
    _useFlags: BitFlags<UseFlag>,
    _activeSlot: ActiveSlot,
    _customVarData: int,
  ): boolean | undefined => {
    if (!inBossRoomOf(BossID.SATAN)) {
      return undefined;
    }

    if (willPlayerRevive(player)) {
      return undefined;
    }

    const shouldSustainDeath = this.fire(
      player,
      0,
      DamageFlagZero,
      EntityRef(player),
      0,
    );
    if (shouldSustainDeath !== undefined) {
      // End-users will return false to stop the damage from being fatal. We have to return true to
      // prevent the Bible from firing.
      return !shouldSustainDeath;
    }

    return undefined;
  };

  // ModCallbackCustom.ENTITY_TAKE_DMG_PLAYER
  private entityTakeDmgPlayer = (
    player: EntityPlayer,
    amount: float,
    damageFlags: BitFlags<DamageFlag>,
    source: EntityRef,
    countdownFrames: int,
  ): boolean | undefined => {
    // This callback should not trigger for the Strawman Keeper and other players that are "child"
    // players.
    if (isChildPlayer(player)) {
      return undefined;
    }

    const gameFrameCount = game.GetFrameCount();
    const lastDamageGameFrame = mapGetPlayer(
      this.v.run.playersLastDamageGameFrame,
      player,
    );
    mapSetPlayer(this.v.run.playersLastDamageGameFrame, player, gameFrameCount);

    // If the player has a revival item such as Dead Cat, this will not be fatal damage.
    if (willPlayerRevive(player)) {
      return undefined;
    }

    if (!isDamageToPlayerFatal(player, amount, source, lastDamageGameFrame)) {
      return undefined;
    }

    const shouldSustainDeath = this.fire(
      player,
      amount,
      damageFlags,
      source,
      countdownFrames,
    );
    if (shouldSustainDeath !== undefined) {
      return shouldSustainDeath;
    }

    return undefined;
  };
}
