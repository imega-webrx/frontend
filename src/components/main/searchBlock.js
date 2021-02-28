import { React, Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory({ forceRefresh: true });

class SearchBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { entry1: " " };
    }

    vol(e) {
        this.setState({ entry1: e.target.value });
        console.log(this.state.entry1);
    }

    serarch(e) {
        axios
            .post("https://webrx.ru/api/col")
            .then((response) => {
                console.log(response);
                history.push("/app/" + e.target.value);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Autocomplete
                    onChange={this.serarch.bind(this)}
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Поиск медикаментов"
                            color="primary"
                            margin="normal"
                            variant="outlined"
                        />
                    )}
                />
            </div>
        );
    }
}

const top100Films = [
    { title: "Афобазол" },
    { title: "Глицин" },
    { title: "Феназепам" },
    { title: "Ацепол" },
];

export default SearchBlock;
