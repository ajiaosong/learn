class PromiseQueue {
  constructor(tasks, count) {
    this.tasks = tasks;
    this.count = count;
    this.totals = tasks.length;
    this.running = [];
    this.complete = [];
  }

  runNext() {
    return this.running.length < this.count && this.tasks.length;
  }

  run() {
    while(this.runNext()) {
      const currentPromise = this.tasks.shift();
      currentPromise.then(() => {
        this.complete.push(this.running.shift())
        this.run()
      })
      this.running.push(currentPromise)
    }
  }
}


// 接收一个promise数组，定义窗口大小为3
const taskQueue = new PromiseQueue(tasks, 3);
taskQueue.run();
