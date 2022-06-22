<script lang="ts">
  import SvelteTable from "svelte-table";
  //  import { students } from "./student/index.json";

  export let student: student[] = [];

  const rows = student;
  console.log("row elemenet", student);

  const columns = [
    /*{
			key: "id",
			title: "Id",
			value: v => v.id,
			
		},*/
    {
      key: "name",
      title: "Name",
      value: (v) => v.student.name,
    },
    {
      key: "age",
      title: "Age",
      value: (v) => v.student.age,
    },
    {
      key: "email",
      title: "Email",
      value: (v) => v.student.email,
    },
    {
      key: "dob",
      title: "DOB",
      value: (v) => v.student.dob,
    },
    {
      key: "address",
      title: "Address",
      value: (v) => v.student.address,
    },
  ];

  //const columns = student;

  export let tableData = [
    {
      Name: "ame",
      Email: "ipsum",
      Age: "quia",
    },
    {
      vitae: "amet",
      lectus: "consectetur",
      quisquam: "adipisci",
    },
  ];
  export let style;
</script>

<div>
  <form>
    <SvelteTable {columns} {rows} />
  </form>

  <form>
    <table class={style}>
      <thead>
        <tr>
          {#each Object.keys(tableData[0]) as columnHeading}
            <th>{columnHeading}</th>
          {/each}
        </tr><tr />
      </thead>
      <tbody>
        {#each Object.values(tableData) as row}
          <tr>
            {#each Object.values(row) as cell}
              <td>{cell}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </form>
</div>
