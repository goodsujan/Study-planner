export const generateSmartSchedule = (sessions, availableMinutes) => {
    let plan = [];
    let total = 0;

    for (let session of sessions) {
        const duration = Number(session.duration);

        if (total + duration <= availableMinutes) {
            plan.push(session);
            total += duration;
        }
    }

    return plan;
};