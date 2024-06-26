<template>
    <div class="card" >
        <div class="card-header">
            <slot name="cardheader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardbody"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp'

}
</script>

<style>
.card{
    width: 18rem;
}
</style>