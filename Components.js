const Component = (function() {

    //Crear el construstor del Component
    const Constructor = function(options) {
        this.element = options.element;
        this.data = options.data;
        this.template = options.template;
    }

    //Agregamos los metodos al prototipo del constructor del componente

    //Render UI
    Constructor.prototype.render = function() {

        const $element = d.querySelector(this.element);
        if (!$element) return;

        $element.innerHTML = this.template(this.data);
        console.log(this.data)
    }


    //Actualizar el state de forma reactiva
    Constructor.prototype.setState = function(obj) {
            for (let key in obj) {
                if (this.data.hasOwnProperty(key)) {
                    this.data[key] = obj[key];
                }
            }

            this.render();
        }
        //Obtenemos una copia inmutable del estado
    Constructor.prototype.getState = function() { return JSON.parse(JSON.stringify(this.data)) }




    return Constructor;

})();