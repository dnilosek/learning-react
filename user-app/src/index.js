import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App = () => {
    return(
        <main className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    comment="Nice Blog Post!" 
                    time="6:00PM" 
                    imgSrc={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Bob" 
                    comment="This is cool" 
                    time="6:05PM" 
                    imgSrc={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Robert" 
                    comment="Yeah..." 
                    time="9:05PM" 
                    imgSrc={Faker.image.avatar()}
                />
            </ApprovalCard>
        </main>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))