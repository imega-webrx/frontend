import React from "react";
import axios from "axios";

class ResultsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vol: [],
        };
    }

    componentDidMount() {
        axios
            .post("https://webrx/api/col", { name: this.props.match.params.id })
            .then((res) => {
                console.log(res.data);
                this.setState({ vol: res.data });
            });
    }

    render() {
        const listItems = this.state.vol.map((number) => (
            <li>{number.name}</li>
        ));

        let id = this.props.match.params.id;

        return (
            <div>
                <li>{listItems}</li>
            </div>
        );
    }
}
export default ResultsWrapper;
