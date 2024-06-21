export async function listPatients () {
    const res = await fetch("http://localhost:8080/patient/list");
    return res.json();
}