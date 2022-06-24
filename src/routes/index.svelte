<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ fetch }) => {
    const res = await fetch("/student.json");
    if (res.ok) {
      const students = await res.json();
      return {
        props: { students },
      };
    }
    const { message } = await res.json();
    return {
      error: new Error(message),
    };
  };
</script>

<script lang="ts">
  import Listing from "./list.svelte";
  import Layout from "./__layout.svelte";
  //import { students } from "./student/index.json";
  let yes = false;
  export let students: student[] = [];
  let name = "asd";
  let email = "asd@gmail.com";
  let age = "12";
  let dob = "06/06/2022";
  let address = "cbe";
</script>

<h1>Registration</h1>

<form action="/student.json" method="POST">
  <center
    ><table>
      <tbody>
        <tr>
          <!-- <label for="">-->
          <td>Name:</td>
          <td><input type="text" name="name" bind:value={name} /></td>
          <!--</label>--></tr
        >
        <tr>
          <!-- <label for="">-->
          <td>Email:</td>
          <td><input type="text" name="email" bind:value={email} /></td>
          <!--</label>--></tr
        >
        <tr>
          <!-- <label for="">-->
          <td>Age:</td>
          <td><input type="number" name="age" bind:value={age} /></td>
          <!--</label>--></tr
        >
        <tr>
          <!-- <label for="">-->
          <td>DOB:</td>
          <td><input type="text" name="dob" bind:value={dob} /></td>
          <!--</label>--></tr
        >
        <tr>
          <!-- <label for="">-->
          <td>Address:</td>
          <td><input type="text" name="address" bind:value={address} /></td>
          <!--</label>--></tr
        >
        <tr>
          <!-- <label for="">-->
          <td><input type="submit" /></td>
          <td><input type="checkbox" bind:checked={yes} />show list</td>
          <!--</label>--></tr
        >
      </tbody>
    </table></center
  >
</form>
{#if yes}
  <center>
    <table class="content-table buyside">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Address</th>
        <th>DOB</th>
      </tr>
      {#each students as data}
        <tr>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.dob}</td>
        </tr>`
      {/each}
    </table></center
  >
{/if}

<style>
  table {
    align-items: center;
  }
</style>
