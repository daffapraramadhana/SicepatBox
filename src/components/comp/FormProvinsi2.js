import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

export default class FormProvinsi2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      provinsi: [],
      kabupaten: [],
      kecamatan: [],
      kelurahan: [],
    };
  }

  getOptions() {
    axios({
      method: "POST",
      url: "http://localhost:3005/service/list-provinsi",
      data: {},
    }).then((res) => {
      console.log(res);
      const options = {
        provinsi: res.data.data.province,
      };

      this.setState({ selectOptions: options });
    });
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // const data = res.data;

    // const options = data.map((d) => ({
    //   value: d.id,
    //   label: d.name,
    // }));
  }

  handleChange(e) {
    console.log(e);
    this.setState({ provinsi: e.province });
  }

  componentDidMount() {
    this.getOptions();
  }

  render() {
    console.log(this.state.selectOptions);
    return (
      <div>
        <Select
          options={this.state.selectOptions}
          onChange={this.handleChange.bind(this)}
        />
        {/* <p>
          You have selected <strong>{this.state.name}</strong> whose id is{" "}
          <strong>{this.state.id}</strong>
        </p> */}
        {/* <Multi /> */}
      </div>
    );
  }
}
