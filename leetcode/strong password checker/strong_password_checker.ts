function strongPasswordChecker(password: string): number {
    let lowercase = false;
    let uppercase = false;
    let digit = false;

    let steps = 0;

    if (password.length < 6) {
        steps += 6 - password.length;
        if (steps >= 3) {
            return steps;
        }
    } else if (password.length > 20) {
        steps += password.length - 20;
    }

    steps += 3;
    const set = steps;
    for (let i = 0; i < password.length; i++) {
        let value = password[i];
        if (value >= "a") {
            if (lowercase) continue;
            lowercase = true;

            steps -= 1;
            if (set === steps - 3) break;
        } else if (value >= "A") {
            if (uppercase) continue;
            uppercase = true;

            steps -= 1;
            if (set === steps - 3) break;
        } else if (value >= "0") {
            if (digit) continue;
            digit = true;

            steps -= 1;
            if (set === steps - 3) break;
        }
    }

    return steps;
};