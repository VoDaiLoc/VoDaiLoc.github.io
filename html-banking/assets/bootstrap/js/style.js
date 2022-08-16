
function createCustomer() {
    let name = document.querySelector("#fullName").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let address = document.querySelector("#address").value;
    doCreat(name, email, phone, address);
};


function showFormEdit(id, name, email, phone, address) {
    document.querySelector("#edit-fullName").value = name;
    document.querySelector("#edit-email").value = email;
    document.querySelector("#edit-phone").value = phone;
    document.querySelector("#edit-address").value = address;
}


function doCreat(name, email, phone, address) {
    let id = Math.floor(Math.random() * (999 - 1) + 1);
    let str = "";
    let htmls = document.querySelector("tbody").innerHTML;
    str +=  `   
                    <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td class="text-center">${phone}</td>
                    <td>${address}</td>
                    <td class="text-end num-space">0</td>
                    <td class="text-center">
                        <a class="btn btn-outline-secondary" onclick = "showFormEdit("${id}", "${name}", "${email}", "${phone}", "${address}")" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Update">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Deposit">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-warning" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Withdraw">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Transfer">
                            <i class="fa fa-exchange" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Delete">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
        `;
        document.querySelector("tbody").innerHTML = str + htmls;
};

function renderTable() {
    let str = "";
    for (let i = 0; i < 10; i++) {
        str +=  `   
                    <tr>
                    <td>${i+1}</td>
                    <td>vo dai loc ${i+1}</td>
                    <td>loc${i+1}@gmail.com</td>
                    <td class="text-center">09${Math.floor(Math.random() * (99999999 - 10000000) + 10000000)}</td>
                    <td>Việt Nam ${i+1}</td>
                    <td class="text-end num-space">0</td>
                    <td class="text-center">
                        <a class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Update">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-success" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Deposit">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-warning" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Withdraw">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Transfer">
                            <i class="fa fa-exchange" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="text-center">
                        <a class="btn btn-outline-danger" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-custom-class="custom-tooltip"
                        data-bs-title="Delete">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
        `
    }
    document.querySelector("tbody").innerHTML= str;
};
renderTable();