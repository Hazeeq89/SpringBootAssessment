const productsControl = new ProductsController();

newItemForm.addEventListener('submit', (event) => {

    event.preventDefault();
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemTargetDate = document.querySelector('#newItemTargetDate');
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const targetDate = newItemTargetDate.value.replaceAll("-","/");
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemTargetDate.value = '';
    productsControl.addItem(title, description, targetDate);

});

