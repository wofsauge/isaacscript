import { saveDataManager } from "../features/saveDataManager/main";
import { getPlayerIndex, PlayerIndex } from "../functions/player";
import { ensureAllCases, getEnumValues } from "../functions/util";
import HealthType from "../types/HealthType";
import ModCallbacksCustom from "../types/ModCallbacksCustom";
import ModUpgraded from "../types/ModUpgraded";
import * as postPlayerChangeHealth from "./subscriptions/postPlayerChangeHealth";

const v = {
  run: {
    healthMap: new Map<PlayerIndex, Map<HealthType, int>>(),
  },
};

export function init(mod: ModUpgraded): void {
  saveDataManager("postPlayerChangeHealthCallback", v, hasSubscriptions);

  mod.AddCallbackCustom(
    ModCallbacksCustom.MC_POST_PLAYER_UPDATE_REORDERED,
    postPlayerUpdateReordered,
  );
}

function hasSubscriptions() {
  return postPlayerChangeHealth.hasSubscriptions();
}

// ModCallbacksCustom.MC_POST_PLAYER_UPDATE_REORDERED
function postPlayerUpdateReordered(player: EntityPlayer) {
  if (!hasSubscriptions()) {
    return;
  }

  const playerIndex = getPlayerIndex(player);
  let storedHealth = v.run.healthMap.get(playerIndex);
  if (storedHealth === undefined) {
    storedHealth = new Map();
  }

  const healthTypes = getEnumValues(HealthType);
  for (const healthType of healthTypes) {
    const storedHealthValue = storedHealth.get(healthType);
    const currentHealthValue = getCurrentHealthValue(player, healthType);
    if (
      storedHealthValue !== undefined &&
      storedHealthValue !== currentHealthValue
    ) {
      const amount = currentHealthValue - storedHealthValue;
      postPlayerChangeHealth.fire(player, healthType, amount);
    }
  }
}

function getCurrentHealthValue(player: EntityPlayer, healthType: HealthType) {
  switch (healthType) {
    // 5.10.1
    case HealthType.RED: {
      return player.GetHearts();
    }

    // 5.10.3
    case HealthType.SOUL: {
      return player.GetSoulHearts();
    }

    // 5.10.4
    case HealthType.ETERNAL: {
      return player.GetEternalHearts();
    }

    // 5.10.6
    case HealthType.BLACK: {
      return player.GetBlackHearts();
    }

    // 5.10.7
    case HealthType.GOLDEN: {
      return player.GetGoldenHearts();
    }

    // 5.10.11
    case HealthType.BONE: {
      return player.GetBoneHearts();
    }

    // 5.10.12
    case HealthType.ROTTEN: {
      return player.GetRottenHearts();
    }

    case HealthType.MAX_HEARTS: {
      return player.GetMaxHearts();
    }

    default: {
      ensureAllCases(healthType);
      return 0;
    }
  }
}
