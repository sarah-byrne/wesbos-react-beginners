import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (e) => {
        e.preventDefault();

        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            description: this.descriptionRef.value.value,
            image: this.imageRef.value.value,
        }
        this.props.addFish(fish);

        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" ref={this.nameRef} placeholder="name" />
                <input name="price" type="text" ref={this.priceRef} placeholder="price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description" ref={this.descriptionRef} placeholder="description" />
                <input name="image" type="text" ref={this.imageRef} placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;