import React, {/*  "Component" */} from 'react'; //Component is revoved because class compo no longuer exist
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {CAMPSITES} from '../shared/campsites'
import { Link } from 'react-router-dom';


function RenderCampsite({campsite}) {
    return(
        <div className ="col-md-5 m-1">
             <Card>
                <CardImg top src={campsite.image} alt={ campsite.name} />
                <CardBody>
                    
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            </div>
    );
    }

function RenderComments({comments}) { 
if(comments){
return(<div className ="col-md-5 m-1">
 <h4>Comments</h4>
{comments.map(comment =>{
    return(
<div key = {comment.id}>
<p>{comment.text} <br/>
,{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 
'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
</div>
    )

})}

</div> 
        ); 
        } 
        
      else{
          return(<div></div>
          

          )
      }
     
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
             <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
           
              <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
               </div>
               </div>
        );
    }
    
    return <div />;
        }

export default CampsiteInfo;


{/* class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    renderCampsite(props){
        console.log(props);
        return(
            <div className ="col-md-5 m-1">
                 <Card>
                    <CardImg top src={props.campsite.image} alt={props.campsite.name} />
                    <CardBody>
                        <CardTitle>{props.campsite.name}</CardTitle>
                        <CardText>{props.campsite.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
           
       

renderComments(comments) {
    if(comments){
        
        return(<div className ="col-md-5 m-1">
            <h4>Comments</h4>
{comments.map(comment =>{
    return(
<div key = {comment.id}>
<p>{comment.text} <br/>
,{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 
'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
</div>
    )

})}

</div> 
        ); 
        } 
        
      else{
          return(<div></div>
          

          )
      }
     
}
render(){
     if(this.props.campsite){
        return(<div className="Row">
            <div className = "container">
            <this.renderCampsite campsite = {this.props.campsite}/>
             {this.renderComments (this.props.campsite.comments)}
             </div>
        </div>)
    }
    else{
        return(<div>No campsite selected</div>)
    }
}
*/}
  