export function CalculateLateFee(days: number): number {
    return days * 0.25;
}

export function MaximumBooksAllowed(age: number): number {
    return age < 12 ? 3 : 10;
}

function privateFunctions() {
    // This is a private function.
}

export function Purge<T>(inventory: T[]): T[] {
    return inventory.splice(2, inventory.length);
}