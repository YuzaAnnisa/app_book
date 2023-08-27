import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "./CardComponents"
import { Container, Row, Col } from "react-bootstrap"
import FontAwesome from "react-fontawesome"

export default function SearchArea() {
    const [input, setInput] = useState("")
    const [clientId, setClientId] = useState("AIzaSyABIc_SdaJzHpUPsemXhq3hsPCGBbSQKj8")
    const [answer, setAnswer] = useState([])
    const [page, setPage] = useState(1)

    function handleChange(event) {
        setInput(event.target.value)
    }

    const url = "https://www.googleapis.com/books/v1/volumes?q="+input+'&key='+clientId+ '&maxResults=40'

    function handleClick() {
        axios.get(url).then((response) => {
          console.log("ini response",response.data.items)
          setAnswer(response.data.items)
        })
    }
    const fetchImages = () => {
        axios
          .get(url)
          .then((response) => {
            setAnswer([...answer, ...response.data.items])
          })
          .catch((error) => {
            console.log(error)
          })
        setPage(page + 1)
    }

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
          handleClick()
        }
    }

    return (
        <Container fluid>
          <Row>
        <Col md={1}></Col>
        <Col md={10} className="justify-content-center">
          <Row className="mt-4">
            <Col md={2}></Col>
            <InputGroup
              onChange={handleChange}
              onKeyPress={handleKeypress}
              className="col-8"
            >
              <div className="d-flex align-items-center justify-content-center w-100">
                <FormControl
                  placeholder="Search Anything!"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={handleClick}
                  style={{ width: "150px", height: "42px" }}
                >
                  <div className="search-icon">
                    <FontAwesome
                      name="search"
                      size="1x"
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />
                  </div>
                </Button>
              </div>
            </InputGroup>
            <Col md={2}></Col>
          </Row>
        </Col>
        <Col md={1}></Col>
          </Row>
          <Row>
        <Col md={1}></Col>
        <Col md={10} className="justify-content-center">
          <InfiniteScroll
            dataLength={answer.length}
            next={fetchImages}
            hasMore={true}
          >
            <div className="grid flex">
              {answer.map((input, index) => (
                <div className="box">
                  {/* <Card img={answer.imageLinks} key={index} /> */}
                  <Card book={answer}/>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </Col>
        <Col md={1}></Col>
          </Row>
        </Container>
    )
}