<!--<script lang="ts">
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
</div>-->
<script>
  // @ts-ignore
  import { DataTable } from "carbon-components-svelte";
</script>

<DataTable
  headers={[
    { key: "name", value: "Name" },
    { key: "protocol", value: "Protocol" },
    { key: "port", value: "Port" },
    { key: "rule", value: "Rule" },
  ]}
  rows={[
    {
      id: "a",
      name: "Load Balancer 3",
      protocol: "HTTP",
      port: 3000,
      rule: "Round robin",
    },
    {
      id: "b",
      name: "Load Balancer 1",
      protocol: "HTTP",
      port: 443,
      rule: "Round robin",
    },
    {
      id: "c",
      name: "Load Balancer 2",
      protocol: "HTTP",
      port: 80,
      rule: "DNS delegation",
    },
    {
      id: "d",
      name: "Load Balancer 6",
      protocol: "HTTP",
      port: 3000,
      rule: "Round robin",
    },
    {
      id: "e",
      name: "Load Balancer 4",
      protocol: "HTTP",
      port: 443,
      rule: "Round robin",
    },
    {
      id: "f",
      name: "Load Balancer 5",
      protocol: "HTTP",
      port: 80,
      rule: "DNS delegation",
    },
  ]}
/>
