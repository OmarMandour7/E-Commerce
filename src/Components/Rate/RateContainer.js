import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import ViewAllReviewHook from '../../hook/review/view-all-review';
import { useParams } from 'react-router-dom';
const RateContainer = ({rateAvg ,rateQty}) => {
    const {id} = useParams()
    const [allReview, onPress] = ViewAllReviewHook(id) ; 
    
    return (
        <Container className='rate-container'>
            <Row className='justify-content-between pt-4'>
                <Col className="d-flex" md="10">
                    <div className="sub-tile d-inline p-1 mon "> Comments </div>
                    
                </Col>
                <Col >
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}<i class="fa-solid fa-star"></i></div>
                    <div className="rate-count d-inline mon p-1 pt-2">{rateQty} Rates</div></Col>
            </Row>
            <RatePost />
         {
            allReview.data  ? (allReview.data.map((review , index) =>{
                return(<RateItem key={index} review={review} />)
            })):(<h6>لا يوجد تقيمات حتي الان</h6>)
         }
            
            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
            
        </Container>
    )
}

export default RateContainer
