import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import provinsi from "../Json/Provinsi.json";
import kabupaten from "../Json/KabupatenTest.json";
import kecamatan from "../Json/Kecamatan.json";

export default class FormProvinsi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      clearable: true,
      Provinsies: [],
      // a: "0",
    };

    this.state.kabupaten = {
      selectedOptionKabupaten: "",
      clearable: true,
      Kabupatens: [],
    };

    this.state.kecamatan = {
      selectedOptionKecamatan: "",
      clearable: true,
      Kecamatans: [],
    };

    this.state.listkabupaten = [];
    this.state.listkecamatan = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  // provinsi().then((res) => {
  //   this.setState({
  //     provinsies: res.Provinsies.nama,
  //   });
  //   console.log("hello", this.state.provinsies);
  // });
  // this.state.Provinsies = provinsi.namaprovinsi;

  handleChange(selectedOption) {
    this.setState({ selectedOption });

    // console.log(selectedOption);
    // console.log(this.state.Kabupatens[0]);
    // let optionsKabupaten = this.state.Kabupatens.map(function (val, key) {
    //   console.log(val.nama, val.id.substring(0, 2), selectedOption.value);
    //   if (val.id.substring(0, 2) === selectedOption.value) {
    //     // console.log(val.nama);
    //     return { value: val.id, label: val.nama };
    //   }
    //   // kabupaten.map(function (kabupaten_1) {
    //   // return { value: kabupaten_1.id, label: kabupaten_1.nama };
    //   // });
    // });

    let optionsKabupaten = [];
    this.state.Kabupatens.forEach(function (value) {
      if (value.id.substring(0, 2) == selectedOption.value) {
        console.log("masuk");
        optionsKabupaten.push({ value: value.id, label: value.nama });
      }
    });

    // let optionsKecamatan = [];
    // this.state.kecamatans.forEach(function (value) {
    //   if (value.id.substring(0, 2) == selectedOption.value) {
    //     console.log("masuk");
    //     optionsKecamatan.push({ value: value.id, label: value.nama });
    //   }
    // });

    this.setState({ listkabupaten: optionsKabupaten });
  }

  handleChange2(selectedOptionKabupaten) {
    let optionsKecamatan = [];
    kecamatan.forEach(function (value) {
      if (value.id.substring(0, 4) == selectedOptionKabupaten.value) {
        console.log("masuk");
        optionsKecamatan.push({ value: value.id, label: value.nama });
      }
    });
    this.setState({ listkecamatan: optionsKecamatan });
  }

  render() {
    this.state.Provinsies = provinsi.namaprovinsi;
    let options = this.state.Provinsies.map(function (provinsi) {
      return { value: provinsi.id, label: provinsi.nama };
    });
    // console.log(options);

    this.state.Kabupatens = kabupaten;
    this.state.kecamatans = kecamatan;
    // console.log(selectedOption);
    // console.log(this.state.selectedOption);
    // let optionsKabupaten = [];
    // let optionsKabupaten = this.state.Kabupatens[selectedOption.value].map(
    //   function (Kabupaten) {
    //     kabupaten.map(function (kabupaten_1) {
    //       return { value: kabupaten_1.id, label: kabupaten_1.nama };
    //     });
    //   }
    // );

    return (
      <div>
        <Row>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Provinsi :</Form.Label>
              <Select
                name="form-field-name"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                // labelKey="nama"
                // valueKey="id"
                options={options}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>kabupaten :</Form.Label>
              <Select
                name="form-field-name"
                value={this.state.selectedOptionKabupaten}
                onChange={this.handleChange2}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                // labelKey="nama"
                // valueKey="id"
                options={this.state.listkabupaten}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Kecamatan :</Form.Label>
              <Select
                name="form-field-name"
                value={this.state.selectedOptionKecamatan}
                onChange={this.handleChange2}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                // labelKey="nama"
                // valueKey="id"
                options={this.state.listkecamatan}
              />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
