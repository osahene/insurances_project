<template>
    <div class="py-2">
      <ul class="flex pl-0 rounded list-none flex-wrap">
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            <i class="fas fa-chevron-left -ml-px"></i>
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 text-white bg-green-500">
            1
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            2
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            3
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            4
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            5
            </a>
        </li>
        <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-green-500 bg-white text-green-500">
            <i class="fas fa-chevron-right -mr-px"></i>
            </a>
        </li>
        </ul>
      </div>
</template>

<script>
export default {
    
data(){
    return{

    }
}
    $('#pablo').pagination({
        dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 100],
        pageSize: 5,
        showPrevious: false,
        showNext: false,
        callback: function(data, pagination) {
            // template method of yourself
            var html = template(data);
            dataContainer.html(html);
        }
    })



}
</script>

<style>

</style>