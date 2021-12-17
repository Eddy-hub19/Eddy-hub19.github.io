export const handleKeyPress = (term, state) => {
    return (name, matches, data) => {
        state.gold ++
        String.fromCharCode({ code: 103 }, { code: 71 })
    }
};

// 3. handleKeyPress должна возвращать функцию

// 4. handleKeyPress (term, state) ({}, {}, {code: 71}) должна увеличивать state.gold на 1. То же самое для кода 103.

// 5. Другие ключи не должны влиять на state.gold