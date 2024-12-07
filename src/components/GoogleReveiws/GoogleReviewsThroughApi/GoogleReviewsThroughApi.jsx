

async function getData() {
    const response = await fetch('https://featurable.com/api/v1/widgets/dc98482a-fc7d-4895-973a-08fd34ea1f9e')
    const data = await response.json();
    console.log(data, "from func");
    return data;
}

export const GoogleReviewsThroughApi = async () => {
    const data = await getData()

    console.log(data, "from comp");


    return <div>G rev</div>
}