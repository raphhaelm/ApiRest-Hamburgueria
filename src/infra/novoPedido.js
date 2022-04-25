import DatabaseMetodos from "../../../Atividade todo app api/ToDoAPI-T14/src/utils/DatabaseMetodos.js";
try {
    const table = await DatabaseMetodos.createTable();
    console.log(table);
    await DatabaseMetodos.popular(
        {
            numero: 1,
            pedido: "x-tudo",
            valor: 20,
            id_cliente: 3
        }
    )
} catch (e) {
    console.log(e.message);    
};
