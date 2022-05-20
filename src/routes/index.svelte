<h1>Registration</h1>

<form action="/student/contact" method="POST">

    <label for="">
        Name:
        <input type="text" name="name">
    </label>
    <label for="">
        Email:
        <input type="text" name="email">
    </label>
    <label>
        Age:
        <input type="number" name="age">
    </label>
    <label>
        DOB:
        <input type="date" name="dob">
    </label>
    <label>
        Address:
        <input type="text" name="address">
    </label>
    <label>
        <input type="submit">
    </label>
</form>

<style>
    label{
        display: block;
        margin-bottom: 20px;
    }
</style>