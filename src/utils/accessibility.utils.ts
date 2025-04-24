type HandleKeyboardActionsType = (
  actions: Record<string, () => void>
) => (e: React.KeyboardEvent) => void;

/**
 * Handles keyboard actions based on the provided actions object (e.g.for accessibility purposes).
 * @param actions - An object mapping keys to their corresponding action functions.
 * @returns A function that takes a keyboard event and executes the corresponding action.
 */
export const handleKeyboardActions: HandleKeyboardActionsType =
  (actions: Record<string, () => void>) => (e: React.KeyboardEvent) => {
    if (actions[e.key]) {
      e.preventDefault();
      actions[e.key]();
    }
  };
