<template>
    <div class="search-list-wrapper">
        {{$route.query.keyword}}
    </div>
</template>

<script>



export default {
    data: () => {
        return {
            searchKeyWord: '',
        }
    },
}
</script>

<style lang="scss">
</style>
