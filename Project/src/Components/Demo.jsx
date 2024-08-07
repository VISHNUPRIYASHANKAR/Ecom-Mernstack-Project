export default function Birthday() {
    const [product, setproduct] = useState([]);
    const [image,setImage] = useState([]);
    const reader = new FileReader()
  
    useEffect(() => {
      fetch("http://localhost:3000/productlist",{
       method: "GET"
      })
        .then((res) => res.json())
        .then((res) => setproduct(res)) 
        // $(product).attr("src", data:image/png;base64, ${product}))
  
    },[]);
    // reader.onload = () => {
    //   const base64 = reader.result;
    //   setImage(base64);
    // };
    
  
    return (
      <>
        <Container className="birthmaincontainer">
          <Row>
          
          
          <Col className="birthproducts">
          { product.map((product) => ( 
            // <Link to={'product/:id'+product?._id} style={{ textDecoration: 'none'}} key={product._id}>
          <Card className="text-center" style={{ width: '18rem' } } key={product._id}>
        {/* <Card.Img variant="top" src={product.image.url} /> */}
        <div className="text-center" style={{ width: '18rem' } } >
        <Card.Img variant="top" src={http://localhost:3000/uploads/${product.image}}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          {/* <h2 className="font-medium text-base text-ellipsis line-clamp-1 text-black">{product.name}</h2> */}
          <Card.Text >
            {product.price}
          </Card.Text>
          <Button variant="primary">
          <Link to={'product/:id'+product?._id} style={{ textDecoration: 'none'}} key={product._id}>
           {/* onClick ={(e)=>{viewproduct(product._id)}} */}
            View </Link></Button>
        </Card.Body>
        </div>
        </Card>
    ))} 
          </Col>
  </Row>
  </Container>
  </>
)
