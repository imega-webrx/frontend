import { React, Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

class SearchBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "Афобазол1" },
                { title: "Глицин2" },
                { title: "Феназепам3" },
                { title: "Ацепол4" },
            ],
        };
    }

    serarch(e) {
        axios
            .post("https://webrx.ru/api/col")
            .then(({ data }) => {
                this.setState({ data: data });
                console.log(data);
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
                    options={this.state.data.map(({ title }) => title)}
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

export default SearchBlock;
