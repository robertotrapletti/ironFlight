const HelloButton = {
  addWorld(){
    let div = document.createElement('div');
    import('../anothermodule').then((m) => {
      console.log('the Answer is =', m.AnotherModule.answer);
      div.textContent = m.AnotherModule.answer;
      document.body.appendChild(div);
      })
  },
  start: () => {
    document.querySelector('button.hello').addEventListener('click', HelloButton.addWorld, false);
  }
};
HelloButton.start();


export { HelloButton };