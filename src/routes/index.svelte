<h1>Registration</h1>

<form action="/student/contact" method="POST">
<table>
<tbody>
    <tr>
        <label for="">
        <td>Name:</td>
        <td><input type="text" name="name"></td>
    </label></tr>
    <tr>
        <label for="">
        <td>Email:</td>
        <td><input type="text" name="email"></td>
    </label></tr>
    <tr>
        <label for="">
        <td>Age:</td>
        <td><input type="number" name="age"></td>
    </label></tr>
    <tr>
        <label for="">
        <td>DOB:</td>
        <td><input type="date" name="dob"></td>
    </label></tr>
    <tr><label for="">
        <td>Address:</td>
        <td><input type="text" name="address"></td>
    </label></tr>
    <tr><label for="">
        <td><input type="submit"></td>
        <td><input type="checkbox">show list</td>
    </label></tr>
</tbody>
</table>
</form>

<style>
    label{
        display: block;
        margin-bottom: 20px;
    }
</style>