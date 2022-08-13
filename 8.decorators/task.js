function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let result = cache.find(item => item.hash === hash);
    if (result) {
      console.log("Из кэша: " + result.value);
      return "Из кэша: " + result.value;
    } else {
      let value = func.call(this, ...args);
      if (cache.length > 5) {
        cache.shift();
      }
      cache.push({ hash, value });
      console.log("Вычисляем: " + value);
      return "Вычисляем: " + value;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let nextCall = true;
  let interval;

  function wrapper(...args) {
    if (nextCall) {
      func.apply(this, ...args);
      nextCall = false;
    }
    clearTimeout(interval);
    interval = setTimeout(() => {
      func.apply(this, ...args);
      nextCall = true;
    }, ms)
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let nextCall = true;
  let interval;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;
    if (nextCall) {
      func.apply(this, ...args);
      nextCall = false;
    }
    clearTimeout(interval);
    interval = setTimeout(() => {
      func.apply(this, ...args);
      nextCall = true;
    }, ms)
  }
  return wrapper;
}