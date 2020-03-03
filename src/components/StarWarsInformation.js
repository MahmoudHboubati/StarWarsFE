import React, { Component } from 'react'

class StarWarsInformation extends Component {
    render() {
        return (
            <div>
                <div class="questions-section">
                    <div class="question-answer">
                        <div class="question">What character (person) appeared in the most of StarWars films?</div>
                        <div id="mostAppearedAnswer" class="answer">Some answer</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StarWarsInformation;