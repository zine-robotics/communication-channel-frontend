import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
        <h5>Domain of Interest</h5>
        </DropdownToggle>
        <DropdownMenu>
                <br />
                <DropdownItem><input type="radio" id="web" name="interest" value="web" />
                <label for="web">Web Development</label>
                </DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="app" name="interest" value="app" />
                <label for="app">App Development</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="cad" name="interest" value="cad" />
                <label for="cad">Cad Modelling</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="ip" name="interest" value="ip" />
                <label for="ip">Image Processing</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="ml" name="interest" value="ml" />
                <label for="ml">Machine Learning</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="pcb" name="interest" value="pcb" />
                <label for="pcb">PCB Design</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="algo" name="interest" value="algo" />
                <label for="algo">Algorithm</label></DropdownItem>
                <br />
                <DropdownItem><input type="radio" id="casestudy" name="interest" value="casestudy" />
                <label for="casestudy">Robotics Case Study</label></DropdownItem>
                <br />
                </DropdownMenu>
      </ButtonDropdown>
    );
  }
  
  export default Dropdown;