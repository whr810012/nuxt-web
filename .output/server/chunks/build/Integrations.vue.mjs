import { resolveComponent, withCtx, createTextVNode, ref, useSSRContext, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { P as Particles } from './Particles.vue.mjs';
import Swiper, { Navigation } from 'swiper';
import { _ as _imports_4$1, a as _imports_3$1 } from './integrations-08.svg.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { _ as _imports_0$1 } from './page-illustration.svg.mjs';

const IntegrationsImg01 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill='%230B0909'%20fill-rule='nonzero'%20opacity='.72'%3e%3cpath%20d='M13%2014.27c0-.702.568-1.27%201.27-1.27h5.045c.702%200%201.27.568%201.27%201.27v1.002c0%20.368-.301.635-.635.635h-6.315c-.334.033-.635-.267-.635-.635V14.27Z'%20opacity='.48'/%3e%3cpath%20d='M13%2018.313c0-.334.3-.635.635-.635H25.73c.702%200%201.27.568%201.27%201.27v3.34c0%20.368-.3.636-.635.636H14.27c-.702.033-1.27-.568-1.27-1.27v-3.341Z'/%3e%3cpath%20d='M19.415%2025.33c0-.368.301-.635.635-.635h6.315c.368%200%20.635.3.635.634v.401A1.27%201.27%200%200%201%2025.73%2027h-5.012a1.27%201.27%200%200%201-1.27-1.27v-.4h-.033Z'%20opacity='.48'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _imports_2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAGBwIEBQMAAf/aAAgBAQAAAAB1epfLcIKJbYrJby8ShREPJ+WMw8sXPwfhpXZXcfN4noOwP//EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/aAAoCAhADEAAAACtqYy6Zoyv/xAAqEAACAgEDAgQHAQEAAAAAAAABAgMEAAUREgYhEzEycQcVIkFRgZFTYf/aAAgBAQABPwDDsBuTsMsavp1bfx7kKe7ZV1TT7r8Kt2CV/Pgrjf8AmEYRmoX4NMoyW7DbRoPIebH7AZ1R8QZ4EZ7FhY+fogjYE5d6i1zWS4jleCL8ITyP7x47VCytgzzRTg8lfc750j8bLtApU1+M2q3+6etc03rLQNZ02W/R1KOSCLYS7gqU9wc+LPVV2ThBpcEslKDu0/H6C+I0tu0JJnaWRz3ZzlDQLs8DuhCwg7s3LbYDNd02w1NLcrw8TGrhQ3dR+P8AmBSzbLmlXoNIglFSxYM8y+HIHQCNl/u+4OWupfmQl+Y1mnZ12UiYgR+y5A3BFcDup75ojrPXXw1SwNvS/l7HNfmeCrKlqpFAkrgBYo+BbI6RlsJ4ThUkPbsSQMoRdO1KaR24IH7d2lj7t+zg06sZd47TOg+wTvkKRvBMgbsxPEHK5ZakM0EzQS7bOwbbyyppdi9MLF2Yzgejmd/3iW4dO1mZ+Wxjj2IABPc5V0WDV5nmmvcvuxJJye2JU4z14oGI9QTiWwRtUd423DA74ULuEB7u2wAOIsVGgp2CqiZXuOupyXPCWUs25V/I5LaEmnJKicBx+lQRxz//xAAZEQEBAQEBAQAAAAAAAAAAAAABAAIhEBH/2gAIAQIBAT8AdfIX0bWght8tcv/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEiEP/aAAgBAwEBPwCZ0aXjHKwmGykkR0R0f//Z";

const _imports_3 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAADAAMBAAAAAAAAAAAAAAAEBQcBAgYD/9oACAEBAAAAAI50g+6tSYZZWMWRehFQZy5NqTQ2M/VCYfHc4z53Pucp3//EABgBAQEBAQEAAAAAAAAAAAAAAAMEAQAC/9oACgICEAMQAAAANwsebRmpc0n8Jvf/xAAqEAACAQQBAgUEAwEAAAAAAAABAgMABAUREhNBBhQhIjFCUWFxMpGi0f/aAAgBAQABPwDHkLevJ8lfgEVfXktzjVt7c7gOuY7A0sSD5AFPDE6kaBHer+Bbe3HTBA5elNy6jPokd6tU6dxOhbj6aJqzdh0rSN9tJIByPwu68NYaytrf2WyF9fzZdsazGCx17aMJbNC2vR1XTL+jWXgWC8vcazcnh9Vb79xUa7sLhj8gijsSXDhSdivDsHnc5bxlypLciR21VpgMna3NvdyZRlCyDSRO55/vbVlsJkMlkXu7TIvGo9pgkd+H+WFeMLObH589SUFnjUs+yddqSIx4ydjrizDiRUILTSxgnXH0rDO2PzdtJLpQfxV/mZb2GHH26uACrNcKxCrWKy8ti/k5UeTrM2rgMWHcgGvHN0t5m0CadkQLTWc8eGeaXkA8o1y70k4gnaTiD7QAK6rT3iSzMTs62O1QZ0W1qbLIWokiP1r9QqHxGbpYMbh7A8idKv8A2r51gzLMri4aJhyY/DMPnX4rM56PKWChEEZB2yfamXixFe4rxO+IO9V5yXpBCFIHfXrVj4gvsbbTwWnl16oKmbp+/X4NEacfqkRm9V/s1//EABoRAAIDAQEAAAAAAAAAAAAAAAABAhEhMSL/2gAIAQIBAT8AkWQeD4zeiflFDgOCdM//xAAeEQACAgICAwAAAAAAAAAAAAAAAgERAyISEyExQf/aAAgBAwEBPwDGq1sdqxrRnXk3gr1JQsbMc5qiMgmZkiYj6f/Z";

const _imports_4 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBgQFBwEA/9oACAEBAAAAALM5RNKon9d5x4WMsr6GhMp31Jx6PTzUePutvkelJsJ39//EABgBAAMBAQAAAAAAAAAAAAAAAAABAwIE/9oACgICEAMQAAAA5L3lh4pc5xMqY//EAC0QAAICAgEBBwMDBQAAAAAAAAIDAQQFEQASBhMhIjFBURRSYTI0cYOhsdHh/9oACAEBAAE/AFZK3ZxyLVi2CjtL7yIAvEfif41yh2jyZGRA9ZJE+mN66Tj7uW+09Wv0hevAGy8p9Wtco5V1q4EnTOxUlvQoiLY7n04B4+rjXHl1ToPN8b52YdJqfbdDBIbJxXTvcSGuHXq4ayCWMKwYgEFW9SmB+J5OUNxqbUp93IlK1qD2gvaeJ7D4bNwt+W6JaA6hce3Iw9Ps9iG1qZsmsLRMC9ZT/wA5ctAaCUTBM5jyLKOouVMlJgSkrVEJGZkTHpifedct37q7BPJhd6UyYTP28wcG51RiRNZyyDL88VZzzr6UygKKdecyYEjPxMTHKNrKWYsVspeokgIkDEWQZHv/ABy1RDJ5VTRyr0ur+cOjy7DeunmYrk+oT09XeBvoHfifMlTTkgh8aFCigYgY3Pjrh07KkEbTVIpDYiuNeb2LmMbcy18xvrC2rWgI2wEL17eMxEczlVlTJV7Svp1Vw0HRVYJbn8yPhzAVCvFbs3UpAl6ATKdFIdMa/triRKW94C4YKhmJ3OojlTBHmMa0qM92mWeUfT04lT5CxRfjjK0apAdeO9+kzzIw3snknVTorspMRIlsiDgS1yczbz7EVvo01KwHEwKl63/Ec7PlrHKS4BjpXESOvTk/SQP7ZM/0452fp5i9bmphT7hERHfOL9MDvlLF1sNWIUQbXF+tzJ2Rf6jnaXBDlXyZ1ldf3RvfMP2cHFz35LHridB+Z5jxJGxKfGR5ZvypZF8c/8QAGhEBAAMBAQEAAAAAAAAAAAAAAQACESEDE//aAAgBAgEBPwBAYeQGy1y3Cb0myxnZ1n0chbCf/8QAGhEAAwEAAwAAAAAAAAAAAAAAAAECERAxUf/aAAgBAwEBPwAdMlNdmGC84Uoc6z//2Q==";

const _imports_5 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAFBgcEAwEC/9oACAEBAAAAAIR0btOvKht9I2ARsvpVAxp6BzN2UHKAHh6sqPLxQr78FDfP/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwIEAP/aAAoCAhADEAAAADsG0hCSih0Gi5v/xAApEAACAQQBBAEEAgMAAAAAAAABAgMABAURBhIhQWETFSIxcUJRUpGh/9oACAEBAAE/ABQ9De6xnDWnt0lvzLAWGxEB99TcPjib5IetgPD1HibWO3BiZnf+SMO4rOQLa4VyyhS/YezSDdcDx0FxlpbydOuOzQMq/wBuToVCLQzlbmWMuTrROhV1h7Qt8piZWA7MrEUIFOSCxsOvfRIPBBHY1zm0SHDQaJ2ZKjUEdzo1wCCOTA3btvrS8QLo62SKbDKY+tmb4x9xj7dJrIK9/wBdujOEgCkIrlNk+x6qyc2vJsibgyJaW9kZmUvt99tAH91f8hyuRgS2urySWBH6kVtdq62Hn/lcYydxaZKOITmO3klVpF8Ej8VcX8t3alLZ44oejbyE96TKfSTePeEOkhDLP+h+DWYy9ze3l3PDK6i4JDgeV8Cu4Puvkf8Azb/dcKQXPMcZBMDJE8vS6HuCCDT4zL4Ca5Fiq3Fmd6hkbRC/0D5rJ4/kOfguboxi3tIwdKx7n0AKxvAbeNx9Uu5n8gRHQrnXG8PisVayYoF5S+nIUmsLx67zMm49RQA6aVq4dgcZgCGjQvKT98rd2qW6sJIx1yI3oisleQvbi2t4+iIfk60T+hRjdj2Vde6FsH2D3r//xAAbEQABBQEBAAAAAAAAAAAAAAACAAEREiEDEP/aAAgBAgEBPwAyq0qer7K5lYUW+C0J38vkL//EABoRAAMBAQEBAAAAAAAAAAAAAAABEQISEDH/2gAIAQMBAT8ASrhxk2uXDKj819Oox7SRXaf/2Q==";

const IntegrationsImg02 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FF4A00'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M22%2020.003c0%20.577-.104%201.15-.307%201.69a4.797%204.797%200%200%201-1.69.307h-.006c-.595%200-1.164-.11-1.69-.307a4.785%204.785%200%200%201-.307-1.69v-.006c0-.577.104-1.15.307-1.69a4.78%204.78%200%200%201%201.69-.307h.006c.577%200%201.15.104%201.69.308.203.54.307%201.112.307%201.688v.007Zm5.889-1.336h-4.67l3.302-3.302a8.062%208.062%200%200%200-1.886-1.886l-3.302%203.302v-4.67A8.038%208.038%200%200%200%2020.004%2012h-.008c-.453%200-.897.039-1.33.111v4.67l-3.301-3.302a7.989%207.989%200%200%200-1.021.864l-.002.001a8.05%208.05%200%200%200-.863%201.02l3.302%203.303h-4.67s-.111.877-.111%201.33v.006c0%20.453.038.898.111%201.33h4.67l-3.302%203.302a8.057%208.057%200%200%200%201.886%201.886l3.302-3.302v4.67c.438.073.882.11%201.327.111h.012c.444%200%20.888-.038%201.327-.111v-4.67l3.302%203.302a8.078%208.078%200%200%200%201.886-1.886l-3.302-3.302h4.67c.073-.432.11-.875.111-1.327v-.012c0-.452-.038-.895-.111-1.327Z'/%3e%3c/g%3e%3c/svg%3e";

const _imports_7 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBwQFBgIB/9oACAEBAAAAAF5O0Bsj3PY2TJWQOXFTLAk71ljVo5mgm2Ysra2lCxkGc3//xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oACgICEAMQAAAAkaMhyNQLhTEf/8QALhAAAgEEAAQFAgYDAAAAAAAAAQIDAAQFEQYSEyEUIjFBUWGRFUJiccHRIzKB/9oACAEBAAE/AINxp4mVmdAezA9wTWNwt5e3mgwZdHbliemtWmIwwkCXBkuSfzkaq8wtpMksEcfRYrpZFNS44W98slyC3TPTYHsD29alteW454pGRidbI7H6E1bQQzwByVNp1USXZ8w37qP6rgbH4/H8M5eWaQr12KIXjPMEq2suldMGLK4b/Rhr/o/qspfLFCsit5o9cw+R6GslAMjZ88KsZAu4+XX2O6tYmtIGM4c9tGEHsCffdY3IwrfxxzoiJvlJ12Qem9VjrDG2lpbp+IxP4iBVkIl7j9Sj96z+HjtLV7yOdpgCT5/Urvsd1kr9nlmVt+UMrVwzd88U8T7lEKEge5qa9VYnupZkkVH5WjCaNPjjcXy3GLt+mAAEWVt8re9cMYrIDARxXBRJkLJ1QoYBf2NZ2eGOFLFn6jSsI9/O+xNcR4uWOZ3Cgc7sCR7qprg1beC/kS5Kos+lR2OgG+D9D6VxXiprDJNDHCyW8yD2rHO1vM0aSPIh78uu26yuTurLGN05JEeV1RAG9WJo8PXAuBHIJGubYrtj+Y/P3FX9ha5JCrcqSgEMpOiD/Iq44VmSVYrewvbhF8xaBQw3UNzZPbpjMj4tZY13ElxB5k+q14ZUkXkcE/pFcX3jY6PGTRW6TXKXaSxdY+XmU70RXGmek4ewFzkpLQeKkiWKPkBYCQ/xUHFuSx8f+WZp3clhzv8Ac1Nxdl8nAEiuX2y7eGIlQoqwyD2lk4vrlzKJEkt4wGJQ8wJ8x+Ruv//EABkRAQEAAwEAAAAAAAAAAAAAAAEAAhAREv/aAAgBAgEBPwALhMWLZEXnmv/EABoRAAIDAQEAAAAAAAAAAAAAAAABAhAREkH/2gAIAQMBAT8A9MqD1kjaUzo//9k=";

const _imports_8 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAGBwMFAAQIAf/aAAgBAQAAAAByV6t3D6Eg59Oku4C61QRuAeuS65/Yym1HMxUZrVIy1WIDyjcOf//EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAKAgIQAxAAAACKVEqltWFZgP8A/8QALxAAAgEDAgQEBQQDAAAAAAAAAQIDBAURAAYSEyExByJBYRQVM1JxECVRoXKCkf/aAAgBAQABPwAjt+dXvclq25HHJc6nlcw4RVUszaufi5UfEyPRW+FKcMPrEs5GtjeI9FdLnJbquL4aeYYhcHKNpz3/AEbCjJIA1uqWXdvifS0kk0hpZJREFJ6ImrjsXbcNAKeGiGFGS/H5jrclrWzXAT0MpVFfIw2Sh1sfep3NQiOqEaVkS4cqfqe+lOrxUrS2yaYgkopYAasLx1fiTb+NsNJMwB/1OrxQRW7blwaGqqJ+bWICSvUjPmAOt626lpqPjpJJJIpQCrO2QNeHtU0TuiqARIrqc9jqlq1mTI1f6WSpt8nA7BeEq6jsQdXdJbHeqK70cWJaaXnIp7ONW2utG4tqTzWyr4RKSZYag8bQP9oB1uWrzBDZ4OqROzM59TnW3ap6G9q4zwMOo1Z6rjjBzq4zwUtvnmqWKwohLEKW/odTrfld+7NDLAY5Y/KUf7T1GtmQzUFpraimiM6NUKJEBAMZyAvfvnW6KWBZ1q0TDTyuQvqmOhBH+WdRPMlVFyw3NT7ep1titLwIJDiT1BGD/wA1udPmFRHb5GCUqJz5XeIMhIPQZPQHP89wTjtrce3abcJ+IPPWZ6p0c06R9l9ydfKoaTb0EMSyRRwU0cr5qlAkJcHzH24c51VWhLpZkJWcu9ZMvMiQTkAe4IJGR31bNkR0pSsd55g1LKzJLTleEjoPX+tUDRUM1C0QMUk4bmxOvCwYY64JJwR2H51//8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEBESQf/aAAgBAgEBPwATTpkRmDXtf//EABsRAAICAwEAAAAAAAAAAAAAAAABAhEQEhNB/9oACAEDAQE/AErHBpXiJNrXCnR18Nj/2Q==";

const _imports_9 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAEBgcFAQj/2gAIAQEAAAAAppikWwrzsZHVmo7fcBBD3KxhDpYVQ2147zsr3d1W22UxjVc//8QAFgEAAwAAAAAAAAAAAAAAAAAAAAEC/9oACgICEAMQAAAABUkybqBUg//EACoQAAEDBAECBQQDAAAAAAAAAAECAwQABQYREhQhBxMxMlEVQVJxFjRC/9oACAEBAAE/ALfjzTrAUUiv4wz+Iq/3ux2SUYaG3Jkoe5DPoj9mselWjIFeU0ksyNb8pZB3+jSsYa4nikbrIrGxHZQ8E9yeCqs/9VP6qZKRChuyXN8UD0FScGttwmvyXpMwecsrKedX2zN4vPYftkx3Q7lJVsprwxzhd8Dtrmu83Wk823D7imsxiq6RyTG7rbG+H2VVredVDbO6y6XlK33mIMm3iMHWi0ytBC1oI7nf30d1b7/mEif06o0J0KBUeQI4VklsvVxuLCekipW4DtTbx49vkH0rwnxucxnbkh/QZiRuRUn02usiOra+df5NY5JUqAAs+o7V4iSZTWMDpHjHWl1BU/z4hCaj3URIK+oZIfABK0rCvOH5bFRbs7NvqnGEoUWmCFBZPBAPzXhfpWLv3RSwt2fKcV2GhxSeCavQBjL3VobQI4ShBKh2SEmsms5vlgctiJKYkl0AoWpHMbB3ois8YyHF7wLXcJHJjgCy+y3xQ6K+rS3I5itrU3HUdrQg+8/Kj968GM4hxsfbxyWsIltOrMf4cSaye7tC1vAEglPrurFkMCFKYSgqK1dyKRdor8/qHgClKeKBv2146Xm23GHCtkds9VHV1BXTCNepqG8Y7qHErKVoIUlQPcGl5SudD5POqU5rShvtX//EABcRAQEBAQAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8AuzndCS//xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ADIjBxuf/9k=";

const IntegrationsImg03 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill-rule='nonzero'%20opacity='.88'%3e%3cpath%20fill='%23FCB400'%20d='m19.02%2012.202-7.114%202.943a.477.477%200%200%200%20.007.883l7.143%202.833a2.65%202.65%200%200%200%201.954%200l7.143-2.833a.476.476%200%200%200%20.007-.883l-7.113-2.944a2.65%202.65%200%200%200-2.027%200'/%3e%3cpath%20fill='%2318BFFF'%20d='M20.667%2020.408v7.076c0%20.337.34.567.652.443l7.96-3.09a.476.476%200%200%200%20.3-.442v-7.077a.477.477%200%200%200-.652-.443l-7.96%203.09a.477.477%200%200%200-.3.443'/%3e%3cpath%20fill='%23F82B60'%20d='m18.808%2020.773-2.362%201.14-.24.116-4.986%202.39c-.316.152-.72-.078-.72-.43v-6.641c0-.127.065-.237.152-.32a.542.542%200%200%201%20.121-.09.508.508%200%200%201%20.434-.033l7.561%202.996c.385.152.415.691.04.872'/%3e%3cpath%20fill='%23000'%20fill-opacity='.25'%20d='m18.808%2020.773-2.362%201.14-5.794-4.884a.542.542%200%200%201%20.121-.09.508.508%200%200%201%20.434-.034l7.561%202.996c.385.152.415.691.04.872'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _imports_11 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBgUHAAMIAv/aAAgBAQAAAACuwWgzFZzUmDG+vAplhKvTl9mVzGC/OTtcQ4nQMPHa3nSnev/EABcBAQEBAQAAAAAAAAAAAAAAAAMCAAH/2gAKAgIQAxAAAAA05TEKdpQ3bnb/xAArEAACAgIBAwQBAgcAAAAAAAABAgMEABEFBhIhEzFBUWEUkSIjNEJxgrL/2gAIAQEAAT8AsVpakjRzDTj4yOEyg9i+S3gZaqHj6kCuJPUMYJUv7DOH6mtcZXlir3paonX0z2v7j6yn05zvPW1SlBPPCx7w4c9hzl6NinzlyC2GSeJyrgsSd513To04Inp8pQuO5KkV32wGcDocjX8gMZRonLHFTWZbFiedfQXQ7nP17ADKfEVbFYTG2vajacg9oT9/nOneS5DoyrK9Sq9uGwwf013++86k5Nua52/yU8axSWGLFB8Y/DXYkd3rOAvudZ01VrfppLcpcGH5+MkmitQ1oXUS13Hdsf3fnOM4+nNalprFMqgqygAkEj85xdf9HxlaAL2iONQE+s66RF6m5YKB/WSf9ZeupJx08M0yaETFdEe+cfXVOlL1iSYxoxC+G9zk4loVaiKGdIoVRte/+RnTFqpxlqvzNiWU0kmRpdo+gu/OVLVe7VS1VnjmhkG0eNtg51fIzdRcvs7Iuyjf+xw2KcEMxng9SZnJXbaCjJeQd4uzv/loQVT43vIJ5ngKIEeNkDRGRgCrkb8/Yx7QloXhIVWAVnEUasPHjzv7IOdOdec50sAONvNEhILwsAyMc5a03IzW7x0JJ5WmkQfBJ2dZLYaWYiT2J8HGXT/jOknr3OPkilWqssQIUyISx8HWdRWYa1B68YrGSWV12kZBC7Bx9lSd5BKf4UJ2H8Z//8QAGhEAAwEAAwAAAAAAAAAAAAAAAAECIRIxQf/aAAgBAgEBPwBP0W9nHCdIQmTCRg0f/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBEh/9oACAEDAQE/ABm9Hwk6ctv/2Q==";

const _imports_12 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBgIEBQcB/9oACAEBAAAAAKEhVdSJ1BQY2O6Pkuzv3tY3Jo7TfaiqB0r5lgZo+j//xAAWAQEBAQAAAAAAAAAAAAAAAAAEBQP/2gAKAgIQAxAAAAB5SrUXHSfWpSsEFakn/8QAKRAAAgEDBAEDAwUAAAAAAAAAAQIDAAQRBRIhMRQGQVEQE2EVIkJSYv/aAAgBAQABPwB4ijccilP4q51C2tE3XE6Rr/o1b69pd04SO7jLZxgnFALtyKLYpmXZyK131X+m3Rt44FZh7k1C9xrWoGS4l3Emo0Ftsh8YbGO05WtJug8UkIYn7RC4I6FMc1qFw1tatKELkfxrVrprvUJZ3Ujc+SPiols42hmtJUw3AIIyOPcVHeN4rR43sRgYrQQhFxJyZCQpJ+B1RNTKCOTXqKEwazcKYtik5AHVaLaLdmZCSvW0j2NDS9ShaLx7jJZsDPGKsLd7a2CyyiSUnLuB2fpdXkNsgaeUID0D2a9QJZ6sE2O6yL0dlWNrZ2VvsRiWyDuIrz4ONm/g5HFJrVoy5kDoR3xmob+3uH2xSqT8Hg1qtzJdJcXEhw2P2j+tfeWVFf5FIuaYGN/xQAJIPTCm3RXCkcHAGRX/xAAcEQADAAIDAQAAAAAAAAAAAAAAAQIDEQQhMRL/2gAIAQIBAT8ApqfS+Tpk0qW0Zyl3oxJzCTLzfXSHCb2LNS9P/8QAHBEAAgIDAQEAAAAAAAAAAAAAAQIAAwQREiEx/9oACAEDAQE/AFBaV4vYjoUYqZTKmPPWpcwewsIlAX0wOQNCHHU/J//Z";

const _imports_13 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAEBQYHAAID/9oACAEBAAAAAKcXNeUrtyihH0mzsIUR2OLY5k05xO+tE+XqwyDQTQ6IN1//xAAZAQEBAAMBAAAAAAAAAAAAAAACAwABBAX/2gAKAgIQAxAAAADze7pkhN00ERTJL//EAC4QAAIBBAECBAQGAwAAAAAAAAECAwAEBREGEhMhMVFhFCIyQQcVcYGRsUJj0f/aAAgBAQABPwAyVeXiWdrLcS77cSlm1V7l81yqdjjbItBCdo3Trp/U1Pn+YYiItezXUcRATuKwIGquuT5WUjvZe7ZWGxqRqkvO8S0s88nu3jRkrNchgzFzJgls5YiZxGZu96GrTMWmPvzbLDKIYtqhB0oA9ql5VZzMbD4aWb5NvtAVArkXF4YOOx39uQm5pXVP9fygVYYfFvgYZGiO3RSx3Rkr8t6+SzSSHoDTkqxqX4VcoXvZdJGw2p8iR9qmkw2VvI7yAS2qMehnKlQG/o1mbyNuONYxK7JCsmpD5MGI0B/FY68Kcah2fIAU0tZDLXNjnb7olPQZTtSN1KsZu3u9PIsiLuEID/IP3q5hKQJIrXcauNdmYjR/QVynHx4vjOHVUZJLm3aSUE+bbrD39s9oLG5idholSjaO6j5Jl5pUiSRGd2CqOgeJNR4pcXcxw3axTSJbiWWTo+t/EnX76H7VmOIW3JII8tg8iLSeaMNNC+yhb+xXE/w8Bv4583dm8eI7SBPprPYLHciKRXUMbRxsQCD5J7EVe8UPGriRb+WWNQ3yTCElWHs1W3FsRxpka0g7k6r1NcSgM+/b0qWSDPWcqdxUvLc9tyv+Da3r3FYXBXEEptjKieJZA52GHqtXLPi8fIQ/dkI6URY9IG9T5bFY/OWk96cTZus1xAgab7BFpJlORa2fRjmiLdDDYJUj/tf/xAAdEQACAQUBAQAAAAAAAAAAAAABAgADBBESITFB/9oACAECAQE/AKaFjPOYhcLLf7GHYynEuF1XkD7DaUFdsk+T/8QAGREBAAMBAQAAAAAAAAAAAAAAAQACEQMh/9oACAEDAQE/AL3KkATdhRWd3ycnazTZyvtsYUa+TohP/9k=";

const _imports_14 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAwADAAAAAAAAAAAAAAAGBwEEBQADCP/aAAgBAQAAAAA7gK3yWKYcuD88uUBxHNZhXKHPPJ41u0dElsfMDdHcANzXXtf/xAAXAQEBAQEAAAAAAAAAAAAAAAADAAQC/9oACgICEAMQAAAAoND56DQ4c3CsH//EACsQAAIBBAAFAgUFAAAAAAAAAAECAwAEBREGEhMhMRBBBxQyYaEjUXKx4f/aAAgBAQABPwBRU08VtA80zqkaDbMx7AVP8QjNeNDi7VXjU66sp81juJ+rGDewhB7ungUNEAg7Brl9PiTLNHwuOm2lM6h64cuIIpwbiZI1Pu3gmlysEVzHjHAMxUNy9gOU1ipFkxsIVuYxjkb7EVr044x1xkuGJ4rbuyESlNbLgVPFHDbxGWbsz70TvWvtWNyuImks3BaSXppE79IqCdeNnzWMRUsEIXl5yX9FFONKSewFcUJaT8X33yBDxCcleTwf31WAWO6xECmMdWJ1cbH0VbcjW0RiIKcg5SPSLKNeMyWMJbk8u4/AFcd3GQtrJYZ7tjLL3MUfZVWsjiXtb4dMHUkUcyn+X+g1DkYsRwu80jfrqhVF93k8AVw51ocJZQyHciRrzighPcd64PZWtb8DXWikP58VnsKc5ktLN3kiUAa3rbHf9VNMLC4urG9hBmx6m35j36ifUDWAIz3E8U84YWFoxuGUDe9d6wonnBvAQLe5gVoR7kEg0JNZiS2XuI49tX//xAAZEQADAQEBAAAAAAAAAAAAAAAAAQIREDH/2gAIAQIBAT8AHdb2kJYuVDqsH6f/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIREP/aAAgBAwEBPwAUTg+QxvXyaUzoj//Z";

const IntegrationsImg04 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='80.395%25'%20x2='-32.937%25'%20y1='47.75%25'%20y2='126.809%25'%3e%3cstop%20offset='0%25'%20stop-color='%230052CC'/%3e%3cstop%20offset='100%25'%20stop-color='%232684FF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='20.13%25'%20x2='136.965%25'%20y1='-15.912%25'%20y2='79.256%25'%3e%3cstop%20offset='0%25'%20stop-color='%230052CC'/%3e%3cstop%20offset='100%25'%20stop-color='%232684FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill-rule='nonzero'%20opacity='.8'%3e%3cpath%20fill='%232684FF'%20d='m29.412%2019.44-8.606-8.606-.834-.834-6.478%206.479-2.963%202.961a.794.794%200%200%200%200%201.12l5.919%205.919L19.972%2030l6.478-6.479.1-.1%202.862-2.857a.792.792%200%200%200%200-1.124Zm-9.44%203.517L17.015%2020l2.957-2.957L22.928%2020l-2.956%202.957Z'/%3e%3cpath%20fill='url(%23b)'%20d='M9.672%207.043A4.978%204.978%200%200%201%209.651.024L3.18%206.492l3.52%203.521%202.971-2.97Z'%20transform='translate(10.3%2010)'/%3e%3cpath%20fill='url(%23c)'%20d='m12.636%209.992-2.964%202.965a4.98%204.98%200%200%201%200%207.041l6.489-6.485-3.525-3.521Z'%20transform='translate(10.3%2010)'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _imports_16 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAGAwcBBAUC/9oACAEBAAAAAOhAWhWY2Qm2Pc9+esH4WCzPNYqhs9pS10fiR2EgLj+i9h//xAAXAQEBAQEAAAAAAAAAAAAAAAACAQME/9oACgICEAMQAAAA5uhWEa6SAq15f//EACoQAAIBBAEDAgUFAAAAAAAAAAECAwAEBRESBiExE1EUIkJxgTIzYZGh/9oACAEBAAE/ACNCri4jtYjLK2kFXnW0CyGO1h56Otuax/W8VxepbXVuIi50GVtihphsUwGqnZkhZl1se9dQzymcAOx925Vjek7WTFfG3alpJ15AewrN4qPGzrwLFC3YnvqukcibzF+hJ+7btwP2or5q62YvAIrqKcPcyyIzCHXAtUsEknwEcFzxtyoDIR2I1XUDPJBdu5HpxswUa7jRrpHIm3yMb7PpyjTihplDDwRWUkdLJhH+pvlB9qycYMLowUrz7geBWAz0V/hhavLHFd2y8QZBsMB4IrPXxkjaxicSOX3Iy10ooW9VZAvFjok/TRAVQB2FXERkib5S3EE6FZ+yNqQjeDvZHvViTHeSp9JGqSx1Pv1OzvyNdOYW5uLwl0Jj381cDEio29gDX2qwgLYy6fjskgfgeR/orqjB/GTRiNSFCBqnwD2d+yFdEKrf2KxPTTXULTFBtCCNjyKxGJis42i9MEEB9fmszAIpFlJ7aCD+a//EABsRAAIBBQAAAAAAAAAAAAAAAAABQQIQERIh/9oACAECAQE/AGxWkRI6ZMmvD//EABoRAAMBAQEBAAAAAAAAAAAAAAABAhEhEEH/2gAIAQMBAT8AmdGs8S4UMmvhiwddP//Z";

const _imports_17 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//aAAgBAQAAAAASMdEPZB1AWCiu9x5Aa+EnQYW06rgyfMj3lX6l13//xAAaAQACAwEBAAAAAAAAAAAAAAACBAEDBQAG/9oACgICEAMQAAAAzvT2og1EWZgtCxZncX//xAAqEAACAQMDAwQABwAAAAAAAAABAgMABAUGESESMUETFCJhFkJRUnGB4f/aAAgBAQABPwAtTyAVLdJEOpyFH2ajvFdgAG57cUJOaDU7bUuzsxY7Ig6mNYDA/iC3nv76YxxGQpCgOwFXuGvMPItpdW3XAx3jmoXBSdAZHkiKnZiO2361G5qU0wJx1yU5c7LWh7Wa4wXQ8qxsl23otwSo81qbEwX+nngmJ+ADB/IIqUrFciJnBCMVLDjg+ajDKelu44NS1DMVkMIUsZSAoH7qwizYPVEsF51QwyczKrH4bDcE7eKzOs4szaPaYhzNDv0NMPzfQrJWvt5oVYlAF+W/dmqI9ao57sgJ/mpTxWOx097LJPFIE9vs+/3WH1PiMpmt8pj4Yr526fcREhn8VfaWt9NX8UtoxNjOXkCHgoe5rP6PjyNgtzBzIvJp7S5swnrQuqkcMRwalrSqh4LtD5NR6bil1VFboD1GZX/retQxrctaxMoKqGq0AChfTBX7qaaKW/eL4lII9mX7b/BX/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8AQoRU8JGULHJ//8QAHBEAAgMBAAMAAAAAAAAAAAAAAAIBAxEEEjJB/9oACAEDAQE/AGbI0bqb4VW+cF0aphz+xc2KNGTBXZKSf//Z";

const _imports_18 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAGBwMEBQIBCP/aAAgBAQAAAABp9hsxFDWFr1Ic2yoA6ipSsJVlvok78j5+3yJduwGDNBgrIs//xAAYAQADAQEAAAAAAAAAAAAAAAACAwQAAf/aAAoCAhADEAAAAOrBxL3UVumLIofN/8QALhAAAgIBAgQFAwMFAAAAAAAAAQIDBAUABhESITEHEyJBURQjYSQyQjNSgZHB/9oACAEBAAE/AJecWwo5R09tULNekr2ZiERl9Tay/i/WgvmPH1vMSMlXL93/ACNYzxVgtcsdnyoW7eZ/HWQuR3Yq8odSShJKnprHOBRk7n1HWGvvappZuOqOfk63/lZIsdTxVaQGS3KwIU+2sJtzH0McsCwK5I+5Iw6sdbj2tjrVNkgh+nlA4rJF8/nWydzmgbWHyHHlj6p+PkabfMcV14K0foLafbUktciR4UiDjrxPbW8Eji8QcZWrIVCsOUdxx1Vs7riyAjEc7ea3IiWHHKT/AIGocVnrkptvKpQcWkeWQ/b+QBx6EalxhoboS7L94csYkH95b0njrLbdsQ3merTnUdyFQkaoV88XsRZGVJYX/phZP2dffp11ujKrBvgSHjJHTsEaisWr2Qjb6iWBeT7dh5fQurFeSpa54Z0sDhxlm5yeJ9uh1ns7YW81OFl5U5JJH9ywPEDVPJvbpRTcwKyIHB4dwRrO5ypiakzyT8rBeKQq3F31clNueadzxaRi/wDvW2NzWqMoqzQrZh/ir9xrLbgu5ECGtUSqgHUgddNIzWmZiSSxJJOthZL6vbMcJJLVWMJ/5rc2biu1hQqdUHrnnHQzOe5OpAqEoOI4/OtvRGTJ9R27amrfomKjizLq2przyLy9VJ4nXhvnTi9wLA7AxXB5bA/Ptr//xAAbEQACAwADAAAAAAAAAAAAAAAAAQIRIRATQf/aAAgBAgEBPwC8OxDY0X6QtreJ4xH/xAAbEQACAgMBAAAAAAAAAAAAAAAAAQIRAxIxIf/aAAgBAwEBPwCnY8Rq+EOmplaUhKiHqJqz/9k=";

const _imports_19 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBwACBgEECP/aAAgBAQAAAABmSdksERetck7nEWyGhWg9UnGCZXuPwvmfTKUK3CaYh9B//8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDBAD/2gAKAgIQAxAAAAAhHeYMNGjPJ+Y9/8QALBAAAgEEAQMCBgEFAAAAAAAAAQIDAAQFEQYSITETQQcQFCIjUUIyM2Ficf/aAAgBAQABPwCt11ADZOv+0O42O4Py1XTXLsnLheL39/APyxIOn/BJA3ScoyFy7Pd3Lyn/AGNcF5dPBnbfHzTg21y4iCEeD7GumtD5c9cJwjK7haUNF0aHtsjRrE8au75+tAPTDAOf1XEcJbZHMK1xZiFcfL+HSaMnSOzE/IrRu4B/MVnMlaWmDu5pul09MqEP8yewFYXkFphYRCEicsfu6tmsHy+xxt5M+3uGnb3OvTH6FWmWt7yNHiOw/gUtp0Q+tOCAPKDzULhEAJrmWV+puRZeuVgg0XRPLMR5q6eIBGTalxvpqO6ZXGjoga3Xwuvre6hjlcoXlTQDH+mQedUxB2rdwexBpGd2FTv1ZN5priMOk7Eg92Y+Na/Xar5z9SgZAhRR9o8D30K4p8Pb7lONvshE5igg2kJI/uvXA8omFzYt7mBBMH0C690YVHOskImU7VgCK//EABsRAAIBBQAAAAAAAAAAAAAAAAARAQIQEiAh/9oACAECAQE/ADK8N90pln//xAAaEQABBQEAAAAAAAAAAAAAAAAAAQIQERIh/9oACAEDAQE/ADEILnPChIc2j//Z";

const IntegrationsImg05 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3cfilter%20id='a'%20width='292.6%25'%20height='305.9%25'%20x='-94.8%25'%20y='-102.9%25'%20filterUnits='objectBoundingBox'%3e%3cfeOffset%20dy='1'%20in='SourceAlpha'%20result='shadowOffsetOuter1'/%3e%3cfeGaussianBlur%20in='shadowOffsetOuter1'%20result='shadowBlurOuter1'%20stdDeviation='4'/%3e%3cfeColorMatrix%20in='shadowBlurOuter1'%20result='shadowMatrixOuter1'%20values='0%200%200%200%200.988235294%200%200%200%200%200.42745098%200%200%200%200%200.149019608%200%200%200%200.24%200'/%3e%3cfeMerge%3e%3cfeMergeNode%20in='shadowMatrixOuter1'/%3e%3cfeMergeNode%20in='SourceGraphic'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23E2E8F0'/%3e%3cg%20fill-rule='nonzero'%20filter='url(%23a)'%20transform='translate(10.5%2012.5)'%3e%3cpath%20fill='%23E24329'%20d='m9.227%2017%203.399-10.458H5.829L9.227%2017z'/%3e%3cpath%20fill='%23FC6D26'%20d='M9.227%2017%205.829%206.542H1.067z'/%3e%3cpath%20fill='%23FCA326'%20d='M1.067%206.542.034%209.72a.704.704%200%200%200%20.256.787L9.227%2017%201.067%206.542Z'/%3e%3cpath%20fill='%23E24329'%20d='M1.067%206.542H5.83L3.783.243a.352.352%200%200%200-.67%200L1.068%206.542Z'/%3e%3cpath%20fill='%23FC6D26'%20d='m9.227%2017%203.399-10.458h4.762L9.227%2017z'/%3e%3cpath%20fill='%23FCA326'%20d='M17.388%206.542%2018.42%209.72a.704.704%200%200%201-.255.787L9.227%2017l8.16-10.458Z'/%3e%3cpath%20fill='%23E24329'%20d='M17.388%206.542h-4.762L14.672.243a.352.352%200%200%201%20.67%200l2.046%206.299Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _imports_21 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAEBQYHAgP/2gAIAQEAAAAAeFZnxXFcZ1erIK/YwGtEYk80WZtisaoaMZz7rl9PKUZvqJ//xAAYAQEAAwEAAAAAAAAAAAAAAAAEAQIDBf/aAAoCAhADEAAAALUOvQ0Ww6GwZgrW8/8A/8QAKxAAAgEEAQIFAwUBAAAAAAAAAQIDAAQFERIGIRMiMUFhFDJRBxUjgaFC/9oACAEBAAE/AJjZ/TReDxE213qr7O43FYp57yGNAg+8El3P4A3WS/Um6l5jF4sQqG2ZJGLkCoev8wqo9zHazj1KfY1dNdTWeWt3IRoJg55RPVzPF47FvemIVSSQAO5JrqjMvk8wLSBgVT+KMg+59Wrp3pq1bHxwGNXHEBq6z6KjsofrbOL2PNEWlvHinUqP5Ffakuf8qxyaZS2SYMpfWnA9jWbhn/a5TGAutFt+4ro6yOZ6jE9wO8Ttsj0+KsbO5xN3CrTJKXPZVhCaX+qyMd/fOwWGJ4H7MTIQy/I9qy1j+2Zm6tJdMFlIDb0N62DXSB5l4wAQ2zv3FSqk8LxOu1dSprBdMDBZxpYJ2FpJ/wA/g1awmTISSy3KIydkZiRzWiZI4pQg8npyJ7N8isjir7O9QX0sFueDSkeI6HiSKxmFjwa9wrzMAS4q5naFPInJz6A1e5XwIEjMMYkceX15NWGyM8MQia28Yezbq/lupYW5hUDbCovc/wB1FYzwxmXjsSkNxA7r21WQ35SahsoPC8WSJSz/AGIfb5q3tEyV5eXzpxDymGH4jQkf6QTVmVgUd/QAAfk0ELrzI2z+nz8CiW5Fm3tQNj8CrzFJfQc59o7d0ZdV/8QAHREAAgIBBQAAAAAAAAAAAAAAAAIBESEDEBITMf/aAAgBAgEBPwBsHYRJqXVmfRbHbjAttNbf/8QAGxEAAgMBAQEAAAAAAAAAAAAAAAECAxEhE1H/2gAIAQMBAT8Ah1njwnHClrcZiLGuldesbUVrHH4f/9k=";

const _imports_22 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMHAQIEAP/aAAgBAQAAAAB768iIRRwUhw2hsypIDoYWj0lZaWXmt+kORjHBw1nlUMH/AP/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/9oACgICEAMQAAAA5y5CawZ5tJK0j//EACwQAAIBBAEEAQMCBwAAAAAAAAECAwAEBRESBhMiQVExYZEhQgcVFiNygbH/2gAIAQEAAT8AjlPHksfj8irDvXUvBda+TV7PYWVu8lxdIdPwAUj601zBOOdpMkg9r7FO8rISiFj9quEvHkDGM109YZWfp2Z5SCz74Kazeal6fxXank4XEil34/tHqpMfmc1j1uQ/a5OXQSv5OD7NJPmcCVOQglMC/qtwh3w/2K6TuZcmI54NPDIvl9mrJrd2txINeO/HYqOR7HUECl0Huuv+np8rkrCdEJtAP72vtVjl5b6+azjxLRFNhS5NYv8Am+RyE9rk7aFLDXBkYaBWugcPPhshlIIDuzilREPskLsn8FazMzT2UiRQiVwaTIWf07wBqSSG7i4JJ5DevxV3l7uzysqCMiQgqNx7G9+z6NW91kLzIo4Q+WhIwbxJ9ACsdaDFrPzbbTlXf/LiAf8AlLk7eKRlUKSaEeQeMm4uY7dVAJMzhT+PrWOyQtruVpslwt4IzI8jo3EgfHurfqhc7PdXBiTl3WUbXXJPRqwmdmjUaQchoINHdX/UOTtcy2DvL/co0YLlwFEqt9A3oGp4s/O0xgmSQxnUnbYMVNXvU95dGQo5jVyUUR/p71U8jOztyYJ3jyA/dpdAViumLA4u14KY5ljAY1i8LDZyd525vy8B6FfxAgX+rYOKlhPZFXHzpjqrbqO4iPG4t1eeEhUuEUI4+ORr/8QAGxEAAwACAwAAAAAAAAAAAAAAAAECEVEDEBL/2gAIAQIBAT8ApYMaFspConpcb9DR/8QAGREAAwEBAQAAAAAAAAAAAAAAAAECERIi/9oACAEDAQE/AJnTEOcJHJSFR35Oj//Z";

const _imports_23 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAGBwIEBQMAAf/aAAgBAQAAAAB1epfLcIKJbYrJby8ShREPJ+WMw8sXPwfhpXZXcfN4noOwP//EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/aAAoCAhADEAAAACtqYy6Zoyv/xAAqEAACAgEDAgQHAQEAAAAAAAABAgMEAAUREgYhEzEycQcVIkFRgZFTYf/aAAgBAQABPwDDsBuTsMsavp1bfx7kKe7ZV1TT7r8Kt2CV/Pgrjf8AmEYRmoX4NMoyW7DbRoPIebH7AZ1R8QZ4EZ7FhY+fogjYE5d6i1zWS4jleCL8ITyP7x47VCytgzzRTg8lfc750j8bLtApU1+M2q3+6etc03rLQNZ02W/R1KOSCLYS7gqU9wc+LPVV2ThBpcEslKDu0/H6C+I0tu0JJnaWRz3ZzlDQLs8DuhCwg7s3LbYDNd02w1NLcrw8TGrhQ3dR+P8AmBSzbLmlXoNIglFSxYM8y+HIHQCNl/u+4OWupfmQl+Y1mnZ12UiYgR+y5A3BFcDup75ojrPXXw1SwNvS/l7HNfmeCrKlqpFAkrgBYo+BbI6RlsJ4ThUkPbsSQMoRdO1KaR24IH7d2lj7t+zg06sZd47TOg+wTvkKRvBMgbsxPEHK5ZakM0EzQS7bOwbbyyppdi9MLF2Yzgejmd/3iW4dO1mZ+Wxjj2IABPc5V0WDV5nmmvcvuxJJye2JU4z14oGI9QTiWwRtUd423DA74ULuEB7u2wAOIsVGgp2CqiZXuOupyXPCWUs25V/I5LaEmnJKicBx+lQRxz//xAAZEQEBAQEBAQAAAAAAAAAAAAABAAIhEBH/2gAIAQIBAT8AdfIX0bWght8tcv/EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEiEP/aAAgBAwEBPwCZ0aXjHKwmGykkR0R0f//Z";

const _imports_24 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIADAAMAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAEBQYDBwH/2gAIAQEAAAAA6QLHE1ApC+LEoKNiDHGCVLPTnpvj1zMTtYnYVaDB5EUv/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAoCAhADEAAAAJA0LmG7zdBUv//EACwQAAIBAwMCBAYDAQAAAAAAAAECAwAEEQUSIQYTFDFBYSIyQlGBkWKCsdH/2gAIAQEAAT8AV1aIOM4NSrbTSgurE4xyKm666cTXZ9J2XTzQEguqAqxHmBVj1902b7wkkt1aSyEIPEw7VzU8KLE0xdwF5+ECraW37m5RL+QKuLt41CpEPyDWsXU66HcGBkinaF9jEHhqvdB0LTUtfBxobuICYyqCzSADksfetZ0iz1WBb61VSjAP+uP2PL9V0FrVxcaRNpl6TLJbk7Gf6oj5VA0RmCm3AGfeo5QsaKbhSwXkl61m278CSylZFiO8DJqKLxEN/bTtG0TOzgIdzFSeVOPTitJtbWy0vLosUbMSExgY9a0OLwGtAA7d8DA5P8jTG4biOb4vZxS6WuAWlJ/rUwhjtu2zDgEcitWu7q3vHS0gDxgcuDVxCTZLHKfhCj/pNRRA6vcTSN5lUH2AC5/0moBFC6SdwkD020bmZyqIqj7mup7porKSV5WVFXJK+bewrpO0vL67zLN243yAjDPBHlVzp3bgO8khFwxHqKuFTuRQB9m84jY/UcVYoz8Sr8tKJO65dsrtAAzWr6cl7N2T8irt/JrSYBaag0bJgowq+i7gZAcIBuY1co9zfpE6AxRtvTPBDVEjIg343nk1/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECETEQEv/aAAgBAgEBPwA9l8t2RJYKItP/xAAaEQACAgMAAAAAAAAAAAAAAAAAAgEQERJB/9oACAEDAQE/ADS5xwYQaa//2Q==";

Swiper.use([Navigation]);
const _sfc_main$5 = {
  name: "IntegrationssCarousel",
  setup() {
    const swiperInitialized = ref(false);
    return {
      swiperInitialized
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="stellar-carousel swiper-container group"><div class="swiper-wrapper w-fit"><div class="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", IntegrationsImg01)} width="40" height="40" alt="Icon 01"><img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true"></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: "/integrations-single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Retool`);
      } else {
        return [
          createTextVNode("Retool")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow mb-4"><div class="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div></div><div class="flex justify-between"><div class="flex -space-x-3 -ml-0.5"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_2)} width="24" height="24" alt="Avatar 01"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_3)} width="24" height="24" alt="Avatar 02"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_4)} width="24" height="24" alt="Avatar 03"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_5)} width="24" height="24" alt="Avatar 04"></div><button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"><span class="sr-only">Like</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path></svg><span>2.3K</span></button></div></div></div><div class="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", IntegrationsImg02)} width="40" height="40" alt="Icon 02"><img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true"></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: "/integrations-single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Zapier`);
      } else {
        return [
          createTextVNode("Zapier")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow mb-4"><div class="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div></div><div class="flex justify-between"><div class="flex -space-x-3 -ml-0.5"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_7)} width="24" height="24" alt="Avatar 05"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_8)} width="24" height="24" alt="Avatar 06"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_9)} width="24" height="24" alt="Avatar 07"></div><button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"><span class="sr-only">Like</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path></svg><span>4.5K</span></button></div></div></div><div class="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", IntegrationsImg03)} width="40" height="40" alt="Icon 03"><img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true"></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: "/integrations-single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Airtable`);
      } else {
        return [
          createTextVNode("Airtable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow mb-4"><div class="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div></div><div class="flex justify-between"><div class="flex -space-x-3 -ml-0.5"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_11)} width="24" height="24" alt="Avatar 08"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_12)} width="24" height="24" alt="Avatar 09"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_13)} width="24" height="24" alt="Avatar 10"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_14)} width="24" height="24" alt="Avatar 11"></div><button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"><span class="sr-only">Like</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path></svg><span>4.7K</span></button></div></div></div><div class="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", IntegrationsImg04)} width="40" height="40" alt="Icon 04"><img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true"></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: "/integrations-single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jira`);
      } else {
        return [
          createTextVNode("Jira")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow mb-4"><div class="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div></div><div class="flex justify-between"><div class="flex -space-x-3 -ml-0.5"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_16)} width="24" height="24" alt="Avatar 12"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_17)} width="24" height="24" alt="Avatar 13"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_18)} width="24" height="24" alt="Avatar 14"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_19)} width="24" height="24" alt="Avatar 15"></div><button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"><span class="sr-only">Like</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path></svg><span>4.4K</span></button></div></div></div><div class="swiper-slide h-auto bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", IntegrationsImg05)} width="40" height="40" alt="Icon 05"><img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true"></div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: "/integrations-single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`GitLab`);
      } else {
        return [
          createTextVNode("GitLab")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow mb-4"><div class="text-sm text-slate-400">Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.</div></div><div class="flex justify-between"><div class="flex -space-x-3 -ml-0.5"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_21)} width="24" height="24" alt="Avatar 16"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_22)} width="24" height="24" alt="Avatar 17"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_23)} width="24" height="24" alt="Avatar 18"><img class="rounded-full border-2 border-slate-800 box-content"${ssrRenderAttr("src", _imports_24)} width="24" height="24" alt="Avatar 19"></div><button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors"><span class="sr-only">Like</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"></path></svg><span>3.4K</span></button></div></div></div></div></div><div class="flex py-8 justify-end"><button class="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group"><span class="sr-only">Previous</span><svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path></svg></button><button class="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group"><span class="sr-only">Next</span><svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path></svg></button></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/IntegrationsCarousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IntegrationsCarousel = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]), { __name: "StellarIntegrationsCarousel" });

const _imports_0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1440'%20height='427'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='19.609%25'%20x2='50%25'%20y1='14.544%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23A855F7'/%3e%3cstop%20offset='100%25'%20stop-color='%236366F1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23a)'%20fill-rule='evenodd'%20d='m896%200%20461%20369-284%2058z'%20transform='matrix(1%200%200%20-1%200%20427)'/%3e%3c/svg%3e";

const _sfc_main$4 = {
  name: "IntegrationsHero",
  components: {
    Particles,
    IntegrationsCarousel
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Particles = resolveComponent("Particles");
  const _component_IntegrationsCarousel = resolveComponent("IntegrationsCarousel");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0)} class="max-w-none" width="1440" height="427" alt="Page Illustration 02"></div><div class="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div><div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div></div>`);
  _push(ssrRenderComponent(_component_Particles, {
    class: "absolute inset-0 h-96 -z-10",
    quantity: 15
  }, null, _parent));
  _push(`<div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true"><img${ssrRenderAttr("src", _imports_0$1)} class="max-w-none" width="1440" height="427" alt="Page Illustration"></div><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="pt-32 md:pt-40"><div class="text-center pb-12 md:pb-20"><div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">Integrations &amp; Add-ons</div><h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Make Stellar uniquely yours</h1><div class="max-w-3xl mx-auto"><p class="text-lg text-slate-400">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p></div></div>`);
  _push(ssrRenderComponent(_component_IntegrationsCarousel, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/IntegrationsHero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]), { __name: "StellarIntegrationsHero" });

const _sfc_main$3 = {
  name: "IntegrationCard",
  props: ["item"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-linear-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative" }, _attrs))}><div class="flex flex-col p-5 h-full"><div class="flex items-center space-x-3 mb-3"><div class="relative"><img${ssrRenderAttr("src", $props.item.img)} width="40" height="40"${ssrRenderAttr("alt", $props.item.name)}>`);
  if ($props.item.featured) {
    _push(`<img class="absolute top-0 -right-1"${ssrRenderAttr("src", _imports_4$1)} width="16" height="16" alt="Star" aria-hidden="true">`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_router_link, {
    class: "font-semibold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0",
    to: $props.item.link
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.item.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.item.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grow"><div class="text-sm text-slate-400">${ssrInterpolate($props.item.description)}</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/IntegrationCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IntegrationCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]), { __name: "StellarIntegrationCard" });

const IntegrationsImg06 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cpath%20fill='%23000'%20fill-rule='nonzero'%20d='m20.25%2013%207.25%2012.688H13z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg07 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23E1567C'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M21.497%2012.757a1.564%201.564%200%200%200-2.68%200l-2.204%203.775a10.79%2010.79%200%200%201%205.946%208.93H21.01a9.272%209.272%200%200%200-5.179-7.61l-2.04%203.527a5.333%205.333%200%200%201%203.092%204.077H13.33a.255.255%200%200%201-.208-.372l.985-1.675a3.598%203.598%200%200%200-1.125-.636l-.975%201.675a1.52%201.52%200%200%200%20.566%202.09c.231.13.492.2.757.201h4.867a6.499%206.499%200%200%200-2.68-5.798l.774-1.34a7.996%207.996%200%200%201%203.45%207.138h4.124a12.02%2012.02%200%200%200-5.497-10.652l1.565-2.68a.258.258%200%200%201%20.351-.09c.178.097%206.797%2011.647%206.921%2011.78a.255.255%200%200%201-.228.38h-1.594c.02.426.02.851%200%201.276h1.601a1.538%201.538%200%200%200%201.34-2.308l-6.827-11.688Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg09 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cpath%20fill='%230B0909'%20fill-rule='nonzero'%20d='M14.5%2012h11.333v5.667h-5.666L14.5%2012Zm0%205.667h5.667l5.666%205.666H14.5v-5.666Zm0%205.666h5.667V29L14.5%2023.333Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg10 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20fill='%230A1551'%20d='M16.985%2027.205c.303.293.09.795-.34.795h-2.684c-.53%200-.961-.418-.961-.931v-2.603c0-.415.518-.622.82-.33l3.165%203.07Z'/%3e%3cpath%20fill='%23FFB629'%20d='M21.182%2027.408a2.012%202.012%200%200%201%200-2.859L24.05%2021.7a2.044%202.044%200%200%201%202.877%200c.795.79.795%202.07%200%202.859l-2.868%202.849c-.794.79-2.082.79-2.877%200Z'/%3e%3cpath%20fill='%2309F'%20d='M13.606%2020.249a2.012%202.012%200%200%201%200-2.859l4.826-4.798a2.044%202.044%200%200%201%202.877%200c.795.79.795%202.07%200%202.859l-4.826%204.798c-.794.79-2.083.79-2.877%200Z'/%3e%3cpath%20fill='%23FF6100'%20d='M17.551%2023.669a2.012%202.012%200%200%201%200-2.86l6.521-6.478a2.044%202.044%200%200%201%202.878%200c.794.79.794%202.07%200%202.86l-6.521%206.478c-.795.79-2.083.79-2.878%200Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg11 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23146EF5'/%3e%3cpath%20fill='%23FFF'%20d='m31%2015-5.744%2011.284h-5.394l2.403-4.677h-.108c-1.983%202.587-4.942%204.29-9.157%204.677v-4.612s2.697-.16%204.282-1.835H13V15h4.812v3.978h.109L19.888%2015h3.64v3.953h.108L25.676%2015H31Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg12 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23EE5A29'/%3e%3cpath%20fill='%23FFE6DE'%20fill-rule='nonzero'%20d='M24.174%2016.77c.783%200%201.506.298%202.046.783a.54.54%200%200%200%20.888-.43v-3.02A1.11%201.11%200%200%200%2026.005%2013H15.103c-.618%200-1.103.485-1.103%201.103v11.821c0%20.59.485%201.076%201.103%201.076h10.933a1.11%201.11%200%200%200%201.103-1.103V22.88c0-.458-.54-.728-.888-.43-.567.485-1.267.782-2.045.782-1.776%200-3.204-1.455-3.204-3.231-.004-1.78%201.424-3.231%203.172-3.231Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg13 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3cradialGradient%20id='b'%20cx='50.014%25'%20cy='54.715%25'%20r='72.93%25'%20fx='50.014%25'%20fy='54.715%25'%20gradientTransform='matrix(.9091%200%200%201%20.045%200)'%3e%3cstop%20offset='0%25'%20stop-color='%23FFB900'/%3e%3cstop%20offset='60%25'%20stop-color='%23F95D8F'/%3e%3cstop%20offset='99.9%25'%20stop-color='%23F95353'/%3e%3c/radialGradient%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cpath%20fill='url(%23b)'%20fill-rule='nonzero'%20d='M24.412%2020.441c-1.982%200-3.589%201.58-3.589%203.53%200%201.949%201.607%203.529%203.589%203.529%201.981%200%203.588-1.58%203.588-3.53%200-1.949-1.607-3.529-3.588-3.529Zm-9.324%200c-1.981%200-3.588%201.58-3.588%203.53%200%201.949%201.607%203.529%203.588%203.529%201.982%200%203.59-1.58%203.59-3.53%200-1.949-1.608-3.529-3.59-3.529Zm8.25-4.412c0%201.95-1.606%203.53-3.588%203.53s-3.588-1.58-3.588-3.53c0-1.949%201.606-3.529%203.588-3.529s3.588%201.58%203.588%203.53Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg14 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%2310B981'/%3e%3cpath%20fill='%23FFF'%20d='M17.329%2011.5c-.96%200-1.879.38-2.557%201.059L11.5%2015.831v1.498c0%201.058.455%202.01%201.179%202.671a3.606%203.606%200%200%200-1.179%202.671v1.498l3.272%203.272a3.616%203.616%200%200%200%205.228-.12%203.616%203.616%200%200%200%205.228.12l3.272-3.272v-1.498c0-1.058-.454-2.01-1.179-2.671a3.606%203.606%200%200%200%201.179-2.671V15.83l-3.272-3.272a3.616%203.616%200%200%200-5.228.12%203.606%203.606%200%200%200-2.671-1.179Zm5.118%208.5a3.624%203.624%200%200%201-.12-.115L20%2017.558l-2.328%202.327c-.039.04-.079.078-.12.115.041.037.081.075.12.115L20%2022.442l2.328-2.327c.039-.04.079-.078.12-.115Zm-1.503%204.169v.715a1.727%201.727%200%200%200%202.948%201.221l2.72-2.718v-.716a1.727%201.727%200%200%200-2.949-1.22l-2.719%202.718Zm-1.888%200-2.72-2.719a1.727%201.727%200%200%200-2.947%201.221v.716l2.719%202.718a1.727%201.727%200%200%200%202.948-1.22v-.716Zm0-9.053v.715l-2.72%202.719a1.727%201.727%200%200%201-2.947-1.221v-.716l2.719-2.718a1.727%201.727%200%200%201%202.948%201.22Zm4.607%203.434-2.719-2.719v-.715a1.727%201.727%200%200%201%202.948-1.221l2.72%202.718v.716a1.727%201.727%200%200%201-2.949%201.22Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg15 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cpath%20fill='%2322AD01'%20fill-rule='nonzero'%20d='M23.953%2014.265h-5.39v7.218h2.941V18.55h-2.222v-2.265h3.3c.33%200%20.629.133.843.35.217.214.35.517.35.843v6.271h-6.289c-.33%200-.629-.133-.843-.35a1.188%201.188%200%200%201-.35-.843V12h7.66c1.134%200%202.158.46%202.905%201.205a4.093%204.093%200%200%201%201.206%202.898v10.822c0%20.608-.496%201.103-1.106%201.103H16.111a4.094%204.094%200%200%201-2.905-1.205A4.077%204.077%200%200%201%2012%2023.926V16.28h3.57v2.265h-1.303v5.38c0%20.504.206.964.54%201.298.336.335.795.54%201.3.54h9.682v-9.66a1.83%201.83%200%200%200-.541-1.298c-.33-.33-.787-.54-1.295-.54Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg16 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill='%23020202'%20fill-rule='nonzero'%20opacity='.98'%3e%3cpath%20d='M14.857%2014.215h2.572a.643.643%200%200%200%20.642-.643v-1.93a.643.643%200%200%201%20.643-.642h1.929a.643.643%200%200%201%20.642.643v1.929a.643.643%200%200%201-.642.643h-1.93a.643.643%200%200%200-.642.642v2.572a.643.643%200%200%201-.642.643h-2.572a.643.643%200%200%201-.643-.643v-2.572a.643.643%200%200%201%20.643-.642ZM14.215%2025.142v-2.571a.643.643%200%200%200-.643-.643h-1.93a.643.643%200%200%201-.642-.643v-1.928a.643.643%200%200%201%20.643-.643h1.929a.643.643%200%200%201%20.643.643v1.928a.643.643%200%200%200%20.642.643h2.572a.643.643%200%200%201%20.643.643v2.571a.643.643%200%200%201-.643.643h-2.572a.643.643%200%200%201-.642-.643ZM25.143%2025.785H22.57a.643.643%200%200%200-.643.642v1.93a.642.642%200%200%201-.642.642h-1.929a.643.643%200%200%201-.643-.642v-1.93a.643.643%200%200%201%20.643-.642h1.929a.643.643%200%200%200%20.642-.643V22.57a.643.643%200%200%201%20.643-.642h2.572a.643.643%200%200%201%20.642.642v2.572a.642.642%200%200%201-.642.643ZM25.785%2014.857v2.572a.643.643%200%200%200%20.643.642h1.93a.642.642%200%200%201%20.642.643v1.929a.643.643%200%200%201-.643.642h-1.93a.643.643%200%200%201-.642-.642v-1.93a.643.643%200%200%200-.642-.642H22.57a.643.643%200%200%201-.643-.642v-2.572a.643.643%200%200%201%20.643-.643h2.572a.643.643%200%200%201%20.642.643Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg17 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FFD02F'/%3e%3cpath%20fill='%23050038'%20fill-rule='nonzero'%20d='M24.976%2013h-2.195l1.828%203.213L20.586%2013h-2.195l2.011%203.929L16.195%2013H14l2.195%205L14%2028h2.195l4.207-10.716L18.391%2028h2.195l4.023-11.426L22.781%2028h2.195L29%2015.497z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg18 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23EF4444'/%3e%3cpath%20fill='%23FFEBEB'%20d='M24.32%2012.863c.2-.707-.487-1.125-1.114-.679l-8.752%206.235c-.68.484-.572%201.45.161%201.45h2.305v-.018h4.491l-3.66%201.29-1.613%205.732c-.2.708.487%201.126%201.114.68l8.752-6.235c.68-.485.573-1.45-.16-1.45h-3.496l1.972-7.005Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg19 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFF'/%3e%3cstop%20offset='100%25'%20stop-color='%23FFF'%20stop-opacity='.64'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%235E6AD2'/%3e%3cpath%20fill='url(%23a)'%20fill-rule='nonzero'%20d='M.196%209.844c-.036-.152.145-.248.255-.137l5.842%205.842c.11.11.015.29-.137.255a8.02%208.02%200%200%201-5.96-5.96ZM0%207.502a.158.158%200%200%200%20.047.122l8.329%208.33c.032.031.076.049.122.046.379-.024.75-.074%201.114-.148a.156.156%200%200%200%20.076-.264L.412%206.312a.156.156%200%200%200-.264.076A8.01%208.01%200%200%200%200%207.502Zm.674-2.75a.158.158%200%200%200%20.033.177l10.364%2010.364c.046.046.116.06.176.033.286-.127.563-.27.83-.43a.157.157%200%200%200%20.03-.246L1.35%203.894a.157.157%200%200%200-.247.03%207.983%207.983%200%200%200-.43.829Zm1.351-1.86a.158.158%200%200%201-.007-.217%208.008%208.008%200%201%201%2011.307%2011.307.158.158%200%200%201-.217-.007L2.025%202.892Z'%20transform='translate(12%2012)'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg20 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cpath%20fill='%2300ADEF'%20fill-rule='nonzero'%20d='m12.5%2014.988%205.721-.779.003%205.519-5.719.032-.005-4.772Zm5.719%205.376.004%205.523-5.719-.786v-4.774l5.715.037Zm.693-6.257L26.498%2013v6.658l-7.586.06v-5.61Zm7.588%206.309-.002%206.627-7.586-1.07-.01-5.57%207.598.013Z'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg21 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill-rule='nonzero'%3e%3cpath%20fill='%234185F3'%20d='M23.154%2022.805h-6.506l-2.786%204.867c.335.17.716.28.962.28%202.56%200%207.782-.039%2010.375-.039.267%200%20.516-.09.74-.233l-2.785-4.875Z'/%3e%3cpath%20fill='%231767D1'%20d='m13.862%2027.672%202.786-4.867h-5.646c-.002.339.118.648.306%201.001.525.982%201.413%202.552%201.935%203.372.128.202.639.504.619.494Z'/%3e%3cpath%20fill='%23E94235'%20d='m23.154%2022.805%202.786%204.874c.361-.23.655-.593.846-.927.432-.755%201.161-2.013%201.664-2.864.234-.395.325-.75.32-1.083h-5.616Z'/%3e%3cpath%20fill='%2330A753'%20d='m16.648%2022.806%203.25-5.65-2.904-4.842c-.314.207-.583.487-.705.7-1.268%202.224-3.822%206.78-5.106%209.033-.131.23-.194.494-.181.759h5.646Z'/%3e%3cpath%20fill='%23F9BC00'%20d='m23.154%2022.806-3.256-5.65%202.825-4.837c.314.207.659.482.78.696%201.268%202.223%203.822%206.78%205.107%209.032.132.231.172.494.16.759h-5.616Z'/%3e%3cpath%20fill='%230F8038'%20d='m16.993%2012.315%202.905%204.841%202.825-4.837c-.292-.17-.705-.27-1.105-.284-1.112-.037-2.916-.052-3.887-.01-.24.011-.735.288-.738.29Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg22 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23F4466E'/%3e%3cpath%20fill='%23FFF'%20fill-rule='nonzero'%20d='M15.68%2014.918c.807%200%201.482-.631%201.482-1.46%200-.826-.675-1.458-1.481-1.458s-1.481.632-1.481%201.459c0%20.828.675%201.46%201.48%201.46m-3.07%207.814c-.087.37-.13.77-.13%201.097%200%201.285.696%202.138%202.177%202.138%201.228%200%202.224-.73%202.941-1.907l-.438%201.757h2.44l1.394-5.591c.348-1.416%201.023-2.15%202.047-2.15.806%200%201.307.5%201.307%201.328%200%20.24-.022.5-.11.784l-.718%202.57c-.109.37-.152.74-.152%201.089%200%201.22.718%202.112%202.221%202.112%201.285%200%202.309-.827%202.875-2.809l-.958-.37c-.48%201.328-.893%201.568-1.22%201.568-.327%200-.501-.218-.501-.653%200-.196.044-.414.109-.676l.697-2.503c.174-.588.24-1.11.24-1.589%200-1.873-1.133-2.85-2.505-2.85-1.285%200-2.592%201.159-3.245%202.379l.479-2.19h-3.724l-.523%201.929h1.742l-1.073%204.296c-.842%201.873-2.39%201.903-2.584%201.86-.32-.072-.523-.194-.523-.608%200-.24.043-.583.152-.997l1.634-6.48h-4.138L12%2018.196h1.72l-1.11%204.537'/%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg23 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='50%25'%20x2='50%25'%20y1='0%25'%20y2='100%25'%3e%3cstop%20offset='0%25'%20stop-color='%23F8FAFC'/%3e%3cstop%20offset='100%25'%20stop-color='%23E2E8F0'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='url(%23a)'/%3e%3cg%20fill='%230B0909'%20fill-rule='nonzero'%3e%3cpath%20d='M27.38%2026c1.75%200%203.084-.542%203.792-1.291.375-.417.814-1.062.5-1.562-.27-.437-.729-.52-1.271-.25a4.029%204.029%200%200%201-1.834.417c-.666%200-1.376-.25-1.75-.625a2.372%202.372%200%200%201-.709-1.73c0-.167.104-.187.292-.041.479.374%201.188.562%202.147.562%201.77%200%203.334-1.188%203.334-3.02%200-1.937-1.835-3.374-4.606-3.374-3.105%200-5.501%201.999-5.501%205.373C21.775%2023.605%2023.859%2026%2027.38%2026ZM14.564%2022.706c.333%200%20.52.188.75.542l1%201.562c.375.604.688%201.02%201.418%201.02s1.063-.29%201.417-1.103c.437-1%20.896-2.208%201.312-3.832.459-1.813.667-2.937.667-3.853%200-.917-.292-1.458-1.291-1.646-1.376-.25-3.23-.396-5.273-.396-2.043%200-3.896.146-5.272.396-1%20.188-1.292.728-1.292%201.645%200%20.916.209%202.04.666%203.853a24.393%2024.393%200%200%200%201.314%203.832c.354.812.688%201.103%201.417%201.103.73%200%201.043-.416%201.418-1.02l1-1.562c.228-.353.416-.54.749-.54Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const IntegrationsImg24 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%3e%3cg%20fill='none'%20fill-rule='evenodd'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FF3C00'/%3e%3cg%20fill='%23FFD9CD'%20fill-rule='nonzero'%3e%3cpath%20d='M18.544%2019.135c1.745-.957%204.109-2.28%204.109-6.135h-2.899c0%202.139-1.041%202.73-2.645%203.602-1.745.957-4.109%202.28-4.109%206.135h2.87c.029-2.139%201.07-2.701%202.674-3.602ZM23.525%2018.263c0%202.139-1.04%202.73-2.645%203.602-1.745.957-4.109%202.28-4.109%206.135h2.87c0-2.139%201.042-2.73%202.646-3.602%201.745-.957%204.109-2.28%204.109-6.135h-2.87Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const _sfc_main$2 = {
  name: "IntegrationsList",
  components: {
    IntegrationCard
  },
  setup() {
    const items = [
      {
        img: IntegrationsImg06,
        name: "Vercel",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Engineering"
      },
      {
        img: IntegrationsImg07,
        name: "Sentry",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: false,
        category: "Engineering"
      },
      {
        img: IntegrationsImg04,
        name: "Jira",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Engineering"
      },
      {
        img: _imports_3$1,
        name: "GitHub",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Engineering"
      },
      {
        img: IntegrationsImg05,
        name: "GitLab",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Engineering"
      },
      {
        img: IntegrationsImg01,
        name: "Retool",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Engineering"
      },
      {
        img: IntegrationsImg02,
        name: "Zapier",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "No-code"
      },
      {
        img: IntegrationsImg03,
        name: "Airtable",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "No-code"
      },
      {
        img: IntegrationsImg09,
        name: "Framer",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "No-code"
      },
      {
        img: IntegrationsImg10,
        name: "Jotform",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: false,
        category: "No-code"
      },
      {
        img: IntegrationsImg11,
        name: "Webflow",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "No-code"
      },
      {
        img: IntegrationsImg12,
        name: "Coda",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: false,
        category: "No-code"
      },
      {
        img: IntegrationsImg13,
        name: "Asana",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg14,
        name: "Myngo",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg15,
        name: "Bonsai",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg16,
        name: "Decipad",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg17,
        name: "Miro",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg18,
        name: "Popform",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Collaboration"
      },
      {
        img: IntegrationsImg19,
        name: "Linear",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Productivity"
      },
      {
        img: IntegrationsImg20,
        name: "Microsoft",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Productivity"
      },
      {
        img: IntegrationsImg21,
        name: "Google Drive",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Productivity"
      },
      {
        img: IntegrationsImg22,
        name: "InVision",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Productivity"
      },
      {
        img: IntegrationsImg23,
        name: "WeTransfer",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: false,
        category: "Productivity"
      },
      {
        img: IntegrationsImg24,
        name: "Hotjar",
        description: "Stellar makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
        link: "/integrations-single",
        featured: true,
        category: "Productivity"
      }
    ];
    return {
      items
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IntegrationCard = resolveComponent("IntegrationCard");
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="pb-12 md:pb-20"><div class="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar"><ul class="flex flex-nowrap text-sm font-medium space-x-8"><li><a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#engineering"><svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z"></path></svg><span>Engineering</span></a></li><li><a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#nocode"><svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z"></path></svg><span>No-code</span></a></li><li><a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#collaboration"><svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z"></path></svg><span>Collaboration</span></a></li><li><a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#productivity"><svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z"></path><path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z"></path></svg><span>Productivity</span></a></li></ul><div><form class="relative flex items-center"><input class="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]" type="text" id="search" aria-label="Search…" placeholder="Search…" autocomplete="off"><div class="absolute inset-0 w-9 flex items-center justify-center pointer-events-none"><svg class="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z"></path></svg></div></form></div></div><div><div class="mt-12 md:mt-16"><h3 id="engineering" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Engineering</h3><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<!--[-->`);
    if (item.category === "Engineering") {
      _push(ssrRenderComponent(_component_IntegrationCard, { item }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div><div class="mt-12 md:mt-16"><h3 id="nocode" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">No-code</h3><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<!--[-->`);
    if (item.category === "No-code") {
      _push(ssrRenderComponent(_component_IntegrationCard, { item }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div><div class="mt-12 md:mt-16"><h3 id="collaboration" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Collaboration</h3><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<!--[-->`);
    if (item.category === "Collaboration") {
      _push(ssrRenderComponent(_component_IntegrationCard, { item }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div><div class="mt-12 md:mt-16"><h3 id="productivity" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Productivity</h3><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
  ssrRenderList($setup.items, (item) => {
    _push(`<!--[-->`);
    if (item.category === "Productivity") {
      _push(ssrRenderComponent(_component_IntegrationCard, { item }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/IntegrationsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IntegrationsList = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "StellarIntegrationsList" });

const _sfc_main$1 = {
  name: "Cta04"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="max-w-6xl mx-auto px-4 sm:px-6"><div class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden"><div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true"><div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div><div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div></div><div class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="434" height="427"><defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#A855F7"></stop><stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop></linearGradient></defs><path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path></svg></div><div class="max-w-3xl mx-auto text-center"><div><div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">The security first platform</div></div><h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Build your own integration</h2><p class="text-lg text-slate-400 mb-8">All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p><div><a class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="#0"> Start Building <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stellar/Cta04.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Cta = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "StellarCta04" });

const _sfc_main = {
  __name: "Integrations",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "integration-page" }, _attrs))}>`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(IntegrationsList, null, null, _parent));
      _push(ssrRenderComponent(Cta, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Integrations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Integrations.vue.mjs.map
