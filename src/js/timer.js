
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.timing(deltaTime);
    }, 1000);
  }

  timing(time) {
    const daysRef = document.querySelector(`[data-value="days"]`,);
    const hoursRef = document.querySelector(`[data-value="hours"]`);
    const minsRef = document.querySelector(`[data-value="mins"]`);
    const secsRef = document.querySelector(`[data-value="secs"]`);

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    daysRef.textContent = days;

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    hoursRef.textContent = hours;

    const mins = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    minsRef.textContent = mins;

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    secsRef.textContent = secs;
  }

  pad(time) {
    return String(time).padStart(2, '0');
  }
};

const currentTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 22, 2021'),
});

currentTimer.start();

