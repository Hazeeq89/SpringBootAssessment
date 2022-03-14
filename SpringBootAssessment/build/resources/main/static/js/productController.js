
const createHTMLList = (index, title, description, targetDate) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">${targetDate}</p>
    </div>
</div>
</div>

`;


class ProductsController 
{
    constructor()
    {
        this._items = [];
    }
    addItem(title, description, targetDate) {

            const productController = this;
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('targetDate', targetDate);
                for (const pair of formData.entries()) {
                   console.log(pair[0]+ ', ' + pair[1]);}

            fetch('http://localhost:8800/item/add', {
                 method: 'POST',
                 body:formData
                 })
                 .then(response => response.json())
                 .then(data => {
                     console.log('Success:', data);
                     alert("Successfully added to TODO List!")
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert("Error adding item to TODO List!")
                 });
    }


displayItem()
    {
        const productController = this;
        productController._items = [];

        fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())
            .then(function(data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {
                    const itemObj = {
                        id: item.id,
                        title: item.title,
                        description: item.description,
                        targetDate: item.targetDate.slice(0,10),
                   };
                    productController._items.push(itemObj);
              });
              productController.renderProductPage();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

renderProductPage()
        {
            const productHTMLList = [];
            for (let i=0; i<this._items.length; i++)
            {
                const item = this._items[i];
                const productHTML = createHTMLList(i, item.title, item.description, item
                .targetDate);
                productHTMLList.push(productHTML);
            }
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;
        }
}
