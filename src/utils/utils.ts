
export const toCamelCase = (s: string): string => {
    return s.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('_', '');
    });
};