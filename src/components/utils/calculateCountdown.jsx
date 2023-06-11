export function calculateCountdown(eventDateTime) {
    const currentDateTime = new Date();
    const targetDateTime = new Date(eventDateTime);
    const timeDiff = targetDateTime.getTime() - currentDateTime.getTime();

    if (timeDiff > 0) {
      return timeDiff;
    }

    return 0;
  }
