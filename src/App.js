import { Component } from 'react';
import './App.css';

class ImageForm extends Component{

  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      url: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({
      caption: '',
      url: '',
    });
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="caption" value={this.state.caption} onChange={this.handleInput}/>
        <input type="url" name="url" value={this.state.url} onChange={this.handleInput}/>
        <button type="submit">Save</button>
      </form>
    )
  }
};

// class ImageList extends Component{
//
//   render() {
//     const images = this.props.images.map((image, index) => (
//       <li key={index}>
//         <img src={image.url} alt=""/>
//         <p>{image.caption}</p>
//       </li>
//     ));
//
//     return(
//       <ul>
//         {images}
//       </ul>
//     )
//   }
// };

function ImageList(props) {
    const images = props.images.map((image, index) => (
      <li key={index}>
        <img src={image.url} alt=""/>
        <p>{image.caption}</p>
      </li>
    ));

    return(
      <ul>
        {images}
      </ul>
    );
}

class ImageBoard extends Component{

  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }

    this.addImage = this.addImage.bind(this);
  }

  componentDidMount() {
    const images = [
      {
        caption: 'random image',
        url: 'https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg'
      }
    ];

    this.setState({ images });
  }

  addImage(image) {
    const images = [...this.state.images];
    images.push(image);
    this.setState({images});
  }

  render() {
    console.log(this)
    return(
      <div>
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default ImageBoard;
