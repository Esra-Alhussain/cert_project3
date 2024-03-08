
const Dashboard = () => {

    return(
        <div>
            <h1 className="dashboardTitle">User Dashboard</h1>
            <button className="createQuiz"> Create a Quiz</button>
            <br/>
                <div className="quizDetail">
                    <div className="quiz">
                        <h3 className="quizTitle">Quiz Name</h3>
                        <button className="editQuiz">Edit</button>
                        <button className="deleteQuiz">Delete</button>
                    </div>

                    <div className="quiz">
                        <h3 className="quizTitle">Quiz Name</h3>
                        <button className="editQuiz">Edit</button>
                        <button className="deleteQuiz">Delete</button>
                    </div>

                    <div className="quiz">
                        <h3 className="quizTitle">Quiz Name</h3>
                        <button className="editQuiz">Edit</button>
                        <button className="deleteQuiz">Delete</button>

                    </div>
                </div>
        </div>
    )
}

export default Dashboard