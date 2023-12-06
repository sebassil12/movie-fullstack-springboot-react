import { useRef } from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import api from '../api/axios.config';

function Reviews() {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;
    const [reviews, setReviews] = useState();
    const [movie, setMovie] = useState(); 
    

    const getMovieData = async(movieId) =>{
        try{
          const response = await api.get(`api/v1/movies/${movieId}`)
          const singleMovie = response.data;
          console.log(singleMovie)
          setMovie(singleMovie);
          setReviews(singleMovie.reviewIds);
        }catch(e){
    
        }
    }

    useEffect(()=>{
        getMovieData(movieId);  
    },[])

    const addReview = async(e)=>{
        e.preventDefault();
        try{

            const rev = revText.current;
    
            await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId});
    
            const updateReviews = [...reviews,{body:rev.value}];
    
            rev.value = "";
            setReviews(updateReviews)
        }catch(error)
        {console.error(error)}

    }
    return ( 
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster}/>
                </Col>
                <Col>
                {
                    <>
                    <Row>
                        <Col>
                        
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText={"Write a review"}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    </>
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body}</Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            
                            </>
                        )
                    })
                }


                </Col>
            </Row>
        </Container>
                
    );
}

export default Reviews;