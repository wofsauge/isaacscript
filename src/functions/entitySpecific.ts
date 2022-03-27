import { VectorZero } from "../constants";
import { getEntities, removeEntities, spawn } from "./entity";

/**
 * Helper function to get all of the `EntityType.ENTITY_BOMB` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the bombs in the room invisible
 * for (const bomb of getBombs()) {
 *   bomb.Visible = false;
 * }
 * ```
 */
export function getBombs(
  matchingVariant: BombVariant | int = -1,
  matchingSubType = -1,
): EntityBomb[] {
  const entities = getEntities(
    EntityType.ENTITY_BOMB,
    matchingVariant,
    matchingSubType,
  );

  const bombs: EntityBomb[] = [];
  for (const entity of entities) {
    const bomb = entity.ToBomb();
    if (bomb !== undefined) {
      bombs.push(bomb);
    }
  }

  return bombs;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_EFFECT` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the effects in the room invisible
 * for (const effect of getEffects()) {
 *   effect.Visible = false;
 * }
 * ```
 */
export function getEffects(
  matchingVariant: EffectVariant | int = -1,
  matchingSubType = -1,
): EntityEffect[] {
  const entities = getEntities(
    EntityType.ENTITY_EFFECT,
    matchingVariant,
    matchingSubType,
  );

  const effects: EntityEffect[] = [];
  for (const entity of entities) {
    const effect = entity.ToEffect();
    if (effect !== undefined) {
      effects.push(effect);
    }
  }

  return effects;
}

/**
 * Helper function to get all of the familiars in the room.
 *
 * Example:
 * ```ts
 * // Make all of the familiars in the room invisible
 * for (const familiar of getFamiliars()) {
 *   familiar.Visible = false;
 * }
 * ```
 */
export function getFamiliars(
  matchingVariant: FamiliarVariant | int = -1,
  matchingSubType = -1,
): EntityFamiliar[] {
  const entities = getEntities(
    EntityType.ENTITY_FAMILIAR,
    matchingVariant,
    matchingSubType,
  );

  const familiars: EntityFamiliar[] = [];
  for (const entity of entities) {
    const familiar = entity.ToFamiliar();
    if (familiar !== undefined) {
      familiars.push(familiar);
    }
  }

  return familiars;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_KNIFE` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the knives in the room invisible
 * for (const knife of getKnives()) {
 *   knife.Visible = false;
 * }
 * ```
 */
export function getKnives(
  matchingVariant: KnifeVariant | int = -1,
  matchingSubType = -1,
): EntityKnife[] {
  const entities = getEntities(
    EntityType.ENTITY_KNIFE,
    matchingVariant,
    matchingSubType,
  );

  const knives: EntityKnife[] = [];
  for (const entity of entities) {
    const knife = entity.ToKnife();
    if (knife !== undefined) {
      knives.push(knife);
    }
  }

  return knives;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_LASER` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the lasers in the room invisible
 * for (const laser of getLasers()) {
 *   laser.Visible = false;
 * }
 * ```
 */
export function getLasers(
  matchingVariant: LaserVariant | int = -1,
  matchingSubType = -1,
): EntityLaser[] {
  const entities = getEntities(
    EntityType.ENTITY_LASER,
    matchingVariant,
    matchingSubType,
  );

  const lasers: EntityLaser[] = [];
  for (const entity of entities) {
    const laser = entity.ToLaser();
    if (laser !== undefined) {
      lasers.push(laser);
    }
  }

  return lasers;
}

/** The same thing as the `getEntities` function, but returns only NPCs. */
export function getNPCs(
  matchingEntityType?: EntityType | int,
  matchingVariant?: int,
  matchingSubType?: int,
  ignoreFriendly = false,
): EntityNPC[] {
  const entities = getEntities(
    matchingEntityType,
    matchingVariant,
    matchingSubType,
    ignoreFriendly,
  );

  const npcs: EntityNPC[] = [];
  for (const entity of entities) {
    const npc = entity.ToNPC();
    if (npc !== undefined) {
      npcs.push(npc);
    }
  }

  return npcs;
}

/**
 * Helper function to get all of the pickups in the room.
 *
 * Example:
 * ```ts
 * // Make all of the pickups in the room invisible
 * for (const pickup of getPickups()) {
 *   pickup.Visible = false;
 * }
 * ```
 */
export function getPickups(
  matchingVariant: PickupVariant | int = -1,
  matchingSubType = -1,
): EntityPickup[] {
  const entities = getEntities(
    EntityType.ENTITY_PICKUP,
    matchingVariant,
    matchingSubType,
  );

  const pickups: EntityPickup[] = [];
  for (const entity of entities) {
    const pickup = entity.ToPickup();
    if (pickup !== undefined) {
      pickups.push(pickup);
    }
  }

  return pickups;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_PROJECTILE` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the projectiles in the room invisible
 * for (const projectile of getProjectiles()) {
 *   projectile.Visible = false;
 * }
 * ```
 */
export function getProjectiles(
  matchingVariant: ProjectileVariant | int = -1,
  matchingSubType = -1,
): EntityProjectile[] {
  const entities = getEntities(
    EntityType.ENTITY_PROJECTILE,
    matchingVariant,
    matchingSubType,
  );

  const projectiles: EntityProjectile[] = [];
  for (const entity of entities) {
    const projectile = entity.ToProjectile();
    if (projectile !== undefined) {
      projectiles.push(projectile);
    }
  }

  return projectiles;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_SLOT` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the slots in the room invisible
 * for (const slot of getSlots()) {
 *   slot.Visible = false;
 * }
 * ```
 */
export function getSlots(
  matchingVariant: SlotVariant | int = -1,
  matchingSubType = -1,
): Entity[] {
  const slots = getEntities(
    EntityType.ENTITY_SLOT,
    matchingVariant,
    matchingSubType,
  );

  return slots;
}

/**
 * Helper function to get all of the `EntityType.ENTITY_TEAR` in the room.
 *
 * Example:
 * ```ts
 * // Make all of the tears in the room invisible
 * for (const tear of getTears()) {
 *   tear.Visible = false;
 * }
 * ```
 */
export function getTears(
  matchingVariant: TearVariant | int = -1,
  matchingSubType = -1,
): EntityTear[] {
  const entities = getEntities(
    EntityType.ENTITY_TEAR,
    matchingVariant,
    matchingSubType,
  );

  const tears: EntityTear[] = [];
  for (const entity of entities) {
    const tear = entity.ToTear();
    if (tear !== undefined) {
      tears.push(tear);
    }
  }

  return tears;
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_BOMB` in the room.
 *
 * @param variant Optional. If specified, will only remove bombs that match this variant.
 * @param subType Optional. If specified, will only remove bombs that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of bombs.
 * @returns True if one or more bombs were removed, false otherwise.
 */
export function removeAllBombs(
  variant?: BombVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const bombs = getBombs(variant, subType);
  return removeEntities(bombs, cap);
}

/**
 * Helper function to remove all of the effects in the room.
 *
 * @param variant Optional. If specified, will only remove effects that match this variant.
 * @param subType Optional. If specified, will only remove effects that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of effects.
 * @returns True if one or more effects were removed, false otherwise.
 */
export function removeAllEffects(
  variant?: EffectVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const effects = getEffects(variant, subType);
  return removeEntities(effects, cap);
}

/**
 * Helper function to remove all of the familiars in the room.
 *
 * @param variant Optional. If specified, will only remove familiars that match this variant.
 * @param subType Optional. If specified, will only remove familiars that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of familiars.
 * @returns True if one or more familiars were removed, false otherwise.
 */
export function removeAllFamiliars(
  variant?: FamiliarVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const familiars = getFamiliars(variant, subType);
  return removeEntities(familiars, cap);
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_KNIFE` in the room.
 *
 * @param variant Optional. If specified, will only remove knives that match this variant.
 * @param subType Optional. If specified, will only remove knives that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of knives.
 * @returns True if one or more knives were removed, false otherwise.
 */
export function removeAllKnives(
  variant?: KnifeVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const knives = getKnives(variant, subType);
  return removeEntities(knives, cap);
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_LASER` in the room.
 *
 * @param variant Optional. If specified, will only remove lasers that match this variant.
 * @param subType Optional. If specified, will only remove lasers that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of lasers.
 * @returns True if one or more lasers were removed, false otherwise.
 */
export function removeAllLasers(
  variant?: LaserVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const lasers = getLasers(variant, subType);
  return removeEntities(lasers, cap);
}

/**
 * Helper function to remove all NPCs in the room.
 *
 * @param cap Optional. If specified, will only remove the given amount of NPCs.
 * @returns True if one or more NPCs were removed, false otherwise.
 */
export function removeAllNPCs(cap?: int): boolean {
  const npcs = getNPCs();
  return removeEntities(npcs, cap);
}

/**
 * Helper function to remove all of the pickups in the room.
 *
 * @param variant Optional. If specified, will only remove pickups that match this variant.
 * @param subType Optional. If specified, will only remove pickups that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of pickups.
 * @returns True if one or more pickups were removed, false otherwise.
 */
export function removeAllPickups(
  variant?: PickupVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const pickups = getPickups(variant, subType);
  return removeEntities(pickups, cap);
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_PROJECTILE` in the room.
 *
 * @param variant Optional. If specified, will only remove projectiles that match this variant.
 * @param subType Optional. If specified, will only remove projectiles that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of projectiles.
 * @returns True if one or more projectiles were removed, false otherwise.
 */
export function removeAllProjectiles(
  variant?: ProjectileVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const projectiles = getProjectiles(variant, subType);
  return removeEntities(projectiles, cap);
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_SLOT` in the room.
 *
 * @param variant Optional. If specified, will only remove slots that match this variant.
 * @param subType Optional. If specified, will only remove slots that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of slots.
 * @returns True if one or more slots were removed, false otherwise.
 */
export function removeAllSlots(
  variant?: SlotVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const slots = getSlots(variant, subType);
  return removeEntities(slots, cap);
}

/**
 * Helper function to remove all of the `EntityType.ENTITY_TEAR` in the room.
 *
 * @param variant Optional. If specified, will only remove tears that match this variant.
 * @param subType Optional. If specified, will only remove tears that match this sub-type.
 * @param cap Optional. If specified, will only remove the given amount of tears.
 * @returns True if one or more tears were removed, false otherwise.
 */
export function removeAllTears(
  variant?: TearVariant | int,
  subType?: int,
  cap?: int,
): boolean {
  const tears = getTears(variant, subType);
  return removeEntities(tears, cap);
}

/** Helper function to spawn a `EntityType.ENTITY_BOMB` (4). */
export function spawnBomb(
  variant: BombVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityBomb {
  const entity = spawn(
    EntityType.ENTITY_BOMB,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const bomb = entity.ToBomb();
  if (bomb === undefined) {
    error("Failed to spawn a bomb.");
  }
  return bomb;
}

/** Helper function to spawn a `EntityType.ENTITY_BOMB` (4) with a specific seed. */
export function spawnBombWithSeed(
  variant: BombVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityBomb {
  return spawnBomb(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_EFFECT` (1000). */
export function spawnEffect(
  variant: EffectVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityEffect {
  const entity = spawn(
    EntityType.ENTITY_EFFECT,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const effect = entity.ToEffect();
  if (effect === undefined) {
    error("Failed to spawn an effect.");
  }
  return effect;
}

/** Helper function to spawn a `EntityType.ENTITY_EFFECT` (1000) with a specific seed. */
export function spawnEffectWithSeed(
  variant: EffectVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityEffect {
  return spawnEffect(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_FAMILIAR` (3). */
export function spawnFamiliar(
  variant: FamiliarVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityFamiliar {
  const entity = spawn(
    EntityType.ENTITY_FAMILIAR,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const familiar = entity.ToFamiliar();
  if (familiar === undefined) {
    error("Failed to spawn a familiar.");
  }
  return familiar;
}

/** Helper function to spawn a `EntityType.ENTITY_FAMILIAR` (3) with a specific seed. */
export function spawnFamiliarWithSeed(
  variant: FamiliarVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityFamiliar {
  return spawnFamiliar(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_KNIFE` (8). */
export function spawnKnife(
  variant: KnifeVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityKnife {
  const entity = spawn(
    EntityType.ENTITY_KNIFE,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const knife = entity.ToKnife();
  if (knife === undefined) {
    error("Failed to spawn a knife.");
  }
  return knife;
}

/** Helper function to spawn a `EntityType.ENTITY_KNIFE` (8) with a specific seed. */
export function spawnKnifeWithSeed(
  variant: KnifeVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityKnife {
  return spawnKnife(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_LASER` (7). */
export function spawnLaser(
  variant: LaserVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityLaser {
  const entity = spawn(
    EntityType.ENTITY_LASER,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const laser = entity.ToLaser();
  if (laser === undefined) {
    error("Failed to spawn a laser.");
  }
  return laser;
}

/** Helper function to spawn a `EntityType.ENTITY_LASER` (7) with a specific seed. */
export function spawnLaserWithSeed(
  variant: LaserVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityLaser {
  return spawnLaser(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn an NPC. */
export function spawnNPC(
  entityType: EntityType | int,
  variant: int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityNPC {
  const entity = spawn(
    entityType,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const npc = entity.ToNPC();
  if (npc === undefined) {
    error("Failed to spawn an NPC.");
  }
  return npc;
}

/** Helper function to spawn an NPC with a specific seed. */
export function spawnNPCWithSeed(
  entityType: EntityType | int,
  variant: int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityNPC {
  return spawnNPC(
    entityType,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );
}

/** Helper function to spawn a `EntityType.ENTITY_PICKUP` (5). */
export function spawnPickup(
  variant: PickupVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityPickup {
  const entity = spawn(
    EntityType.ENTITY_PICKUP,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const pickup = entity.ToPickup();
  if (pickup === undefined) {
    error("Failed to spawn a pickup.");
  }
  return pickup;
}

/** Helper function to spawn a `EntityType.ENTITY_PICKUP` (5) with a specific seed. */
export function spawnPickupWithSeed(
  variant: PickupVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityPickup {
  return spawnPickup(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_PROJECTILE` (9). */
export function spawnProjectile(
  variant: ProjectileVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityProjectile {
  const entity = spawn(
    EntityType.ENTITY_PROJECTILE,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const projectile = entity.ToProjectile();
  if (projectile === undefined) {
    error("Failed to spawn a projectile.");
  }
  return projectile;
}

/** Helper function to spawn a `EntityType.ENTITY_PROJECTILE` (9) with a specific seed. */
export function spawnProjectileWithSeed(
  variant: ProjectileVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityProjectile {
  return spawnProjectile(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_SLOT` (6). */
export function spawnSlot(
  variant: SlotVariant | int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): Entity {
  return spawn(
    EntityType.ENTITY_SLOT,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );
}

/** Helper function to spawn a `EntityType.ENTITY_SLOT` (6) with a specific seed. */
export function spawnSlotWithSeed(
  variant: int | SlotVariant,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): Entity {
  return spawnSlot(variant, subType, position, velocity, spawner, seed);
}

/** Helper function to spawn a `EntityType.ENTITY_TEAR` (2). */
export function spawnTear(
  variant: int,
  subType: int,
  position: Vector,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
  seed: Seed | undefined = undefined,
): EntityTear {
  const entity = spawn(
    EntityType.ENTITY_TEAR,
    variant,
    subType,
    position,
    velocity,
    spawner,
    seed,
  );

  const tear = entity.ToTear();
  if (tear === undefined) {
    error("Failed to spawn a tear.");
  }
  return tear;
}

/** Helper function to spawn a `EntityType.EntityType` (2) with a specific seed. */
export function spawnTearWithSeed(
  variant: TearVariant | int,
  subType: int,
  position: Vector,
  seed: Seed,
  velocity = VectorZero,
  spawner: Entity | undefined = undefined,
): EntityTear {
  return spawnTear(variant, subType, position, velocity, spawner, seed);
}
