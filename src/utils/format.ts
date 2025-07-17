export function formatIndexWithZeros(arrayLength: number, index: number): string {
    if (arrayLength < 1) {
        throw new Error("Array length must be at least 1");
    }

    const lengthDigits = arrayLength.toString().length;
    const indexDigits = index.toString().length;

    if (lengthDigits === 1 && indexDigits === 1) {
        return `0${index}`;
    }

    const zerosNeeded = Math.max(0, lengthDigits - indexDigits);    
    return '0'.repeat(zerosNeeded) + index.toString();
}