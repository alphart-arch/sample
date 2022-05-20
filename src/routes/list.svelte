<script>
       import SvelteTable from 'svelte-table';
	   import { students } from "./student/contact"

	   const rows = students;
	   console.log(rows);

	   const columns = [
		/*{
			key: "id",
			title: "Id",
			value: v => v.id,
			
		},*/
		{
			key: "name",
			title: "Name",
			value: v => v.name,
			
		},
		{
			key: "age",
			title: "Age",
			value: v => v.age,
			
		},
		{
			key: "email",
			title: "Email",
			value: v => v.email,
			
		},
		{
			key: "dob",
			title: "DOB",
			value: v => v.dob,
			
		},
		{
			key: "address",
			title: "Address",
			value: v => v.address,
			
		},
		
	];



</script>
<div>
	<form>
		<SvelteTable columns={columns} rows={rows}></SvelteTable>
	</form>
</div>