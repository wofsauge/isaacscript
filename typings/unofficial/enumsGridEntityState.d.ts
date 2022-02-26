/** For GridEntityType.GRID_ROCK (2) */
declare const enum RockState {
  UNBROKEN = 1,
  BROKEN = 2,
}

/**
 * For GridEntityType.GRID_POOP (14)
 *
 * The health of a poop is represented by its state. It starts at 0 and climbs upwards in
 * increments of 250. Once the state reaches 1000, the poop is completely broken.
 *
 * Breaking a poop usually takes 4 tears. However, it is possible to take less than that if the
 * players damage is high enough. (High damage causes the tear to do two or more increments at
 * once.)
 *
 * Giga Poops increment by 20 instead of 250. Thus, they take around 50 tears to destroy.
 */
declare const enum PoopState {
  FULL_HEALTH = 0,
  ONE_QUARTER_BROKEN = 250,
  TWO_QUARTERS_BROKEN = 500,
  THREE_QUARTERS_BROKEN = 750,
  COMPLETELY_BROKEN = 1000,
}

/** For GridEntityType.GRID_TRAPDOOR (17) */
declare const enum TrapdoorState {
  CLOSED = 0,
  OPEN = 1,
}

/** For GridEntityType.GRID_PRESSURE_PLATE (20) */
declare const enum PressurePlateState {
  UNPRESSED = 0,
  STATE_1_UNKNOWN = 1,
  STATE_2_UNKNOWN = 2,
  PRESSURE_PLATE_PRESSED = 3,
  REWARD_PLATE_PRESSED = 4,
}

/** For GridEntityType.GRID_TELEPORTER (23) */
declare const enum TeleporterState {
  NORMAL = 0,
  ACTIVATED = 1,
  /**
   * Set when a player stands on a teleport pad that has no corresponding pad for the player to be
   * sent to. When this happens, the pad turns black and deactivates.
   */
  DISABLED = 2,
}
