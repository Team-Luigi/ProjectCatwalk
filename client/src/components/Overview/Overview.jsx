import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';

const StyledContainer = styled.div`
  display: grid;
  border: solid;
  padding: 5px;
  margin: 1em;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);`;
const StyledH2 = styled.h2`
  justify-self: center;
  grid-column: span 5;`;

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/api/products')
      .then((results) => {
        // const productIDs = [];
        // for (let i = 0; i < results.data.length; i += 1) {
        //   productIDs.push(results.data[i].id);
        // }
        this.setState({ products: results.data[0] });
        //  console.log(productIDs);
      });
  }

  render() {
    const { products } = this.state;
    // console.log(products.id);
    return (
      <StyledContainer>
        <StyledH2>Product Overview</StyledH2>
        <ImageGallery />
        <ProductInformation product={products} />
      </StyledContainer>
    );
  }
}

export default Overview;
