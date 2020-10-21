<template>
    <footer>
        <ul class="nav">
            <li>
                <a href="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 18.75V12.1301C21 10.9814 21 10.4071 20.8519 9.87813C20.7208 9.4096 20.5053 8.96892 20.2159 8.57774C19.8893 8.13614 19.436 7.78352 18.5292 7.07828L15.9292 5.05606L15.9292 5.05605C14.5239 3.96305 13.8213 3.41654 13.0454 3.20647C12.3608 3.02111 11.6392 3.02111 10.9546 3.20647C10.1787 3.41654 9.47608 3.96305 8.07078 5.05606L5.47078 7.07828C4.56404 7.78352 4.11067 8.13614 3.78405 8.57774C3.49473 8.96892 3.2792 9.4096 3.14805 9.87813C3 10.4071 3 10.9814 3 12.1301V18.75C3 19.4478 3 19.7967 3.08612 20.0806C3.28002 20.7198 3.78023 21.22 4.41943 21.4139C4.70333 21.5 5.05222 21.5 5.75 21.5H6.375C6.49106 21.5 6.5491 21.5 6.59814 21.4976C7.62554 21.4471 8.44712 20.6255 8.49759 19.5981C8.5 19.5491 8.5 19.4911 8.5 19.375V16.5C8.5 14.567 10.067 13 12 13C13.933 13 15.5 14.567 15.5 16.5V19.375C15.5 19.4911 15.5 19.5491 15.5024 19.5981C15.5529 20.6255 16.3745 21.4471 17.4019 21.4976C17.4509 21.5 17.5089 21.5 17.625 21.5H18.25C18.9478 21.5 19.2967 21.5 19.5806 21.4139C20.2198 21.22 20.72 20.7198 20.9139 20.0806C21 19.7967 21 19.4478 21 18.75Z" stroke="#E84C4F" stroke-width="2"/>
</svg>


                </a>
            </li>
            <li>
                <a href="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#3E4462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H21" stroke="#3E4462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#3E4462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </a>  
            </li>
            <li>
                <a href="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="7.5" stroke="#3E4462" stroke-width="2"/>
<path d="M21 21L15.5 15.5" stroke="#3E4462" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </a>
            </li>
            <li>
                <a href="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="8.25" rx="4.5" ry="5.25" stroke="#262F56" stroke-width="2"/>
<path d="M5.25 21C5.25 21 7.5 18 12 18C16.5 18 18.75 21 18.75 21" stroke="#262F56" stroke-width="2" stroke-linecap="round"/>
</svg>

                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height: 3.75em;
        padding: 1.25em 8%;
        background: #fff;
        position: fixed;
        bottom: 0;
        .nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            list-style-type: none;
        }
    }
</style>