"use client";

import React from "react";
import { useRouter } from "next/navigation";

//components
import FilterCard from "@/components/filter/FilterCard";
import ProductSellCard from "@/components/filter/ProductSellCard";
import DefaultCarousel from "@/components/DefaultCarousel";
import CategoryCard from "@/components/filter/CategoryCard";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col   py-8">
      <div className="w-full h-[145px] md:h-[36vh] bg-white shadow-lg mb-8">
        <DefaultCarousel />
      </div>
      <h3 className="text-md md:text-lg font-bold text-slate-800 mb-4">
        New feature
      </h3>
      <div className="flex items-center gap-2">
        <CategoryCard
          name="อาหารเพื่อสุขภาพ"
          image="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          onClick={() => router.push("/product")}
        />
        <CategoryCard
          name="ตู้เย็น"
          image="https://images.unsplash.com/photo-1686644823210-c9daf5003d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          onClick={() => router.push("/tooyen")}
        />
      </div>

      {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <FilterCard
          name="Kito"
          image="https://media.istockphoto.com/id/1330366961/vector/keto-icon-ketogenic-diet-logo-keto-diet-badge-green-emblem-for-use-in-the-food-industries.jpg?s=612x612&w=0&k=20&c=9MG6nijP8ZwITJ6_OAAJQk8ngLyVSinnOReL_7W2BVI="
          onClick={() => router.push("/product")}
        />
        <FilterCard
          name="Vegetarian"
          image="https://cdn.icon-icons.com/icons2/2882/PNG/512/food_fruit_vegetable_vegetarian_organic_mango_icon_182692.png"
        />
        <FilterCard
          name="Vegan"
          image="https://www.shutterstock.com/image-vector/icon-vegan-food-250nw-1045952446.jpg"
        />
        <FilterCard
          name="Low-carb"
          image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABL1BMVEX///88yLQeqpb6tAD6ZFC+eADclgDw8PDcRjK8cwC9dgDSjAD1rwDUqn0sxbDalADkngAAppHWr4bbkQDv0q38zn36YEvpowDw9fbuqAD926U4xLAxvKj3/fz6W0Tp+Paa4NX7WECu5t31rKMlsZ3aNhuY4NXU7urHgQC6bgC86uJrw7Xx5uXvWUX5dmXy1tNRvKty1cZTzrzgw6X9xb+039je8u531sfM7+o7taPfTDn+8/LbPiiJzsP7iXub1Mr5a1j2oZj4fW7aLw/y0c3+4t/x49Dbt4f44Lb88+P+8NTwtrDphXrjXUz7koXmem/kbF7toJj7joHwqqTRoV/IjkXCgR7GijXUqnHfv5Pr17z06NfquF71wVn2tSTrv3b2vEftxIH126/925TjpzYhhjQzAAAPj0lEQVR4nO2dC1cbNxbHwQGDjTt2SmpwEuMHfmDTBnDwg1cDKcElCX1sUwKhbbrZfv/PsPPQPKS5GkmjOzjZnf85e86S2sY/7tV9SBppbi5VqlSpUqVKlSpVqlSp/g91/ubt1eHy8vJ3pz9t7h/N+ttg6+jNz+12+3j58LsFU+WNjcazzVez/lKIevV22aQzrbfgq7zReLk/6y+GpKO3xxYexUcgT/8nGH9rw3w2Y+PlF++rRz+3l7mAth2/cDO+OrQNeMjhs9Q4m+k3rE2Gw5Pt3YODViuTybQOnj4ZdJr9Sbcq9/Zzx4BRgAsLG98ny8BRtTZ8sd16SGTCPX36ZN6W4Wgwbk5EnOc/SACaiM/uBSmgWpfAZWz5cJQI5oiPuXMsBXjfVhwNdzMenIUHwFGYg3G/Bn7SKwdwWQhoIt7bWOyetHy4TAa0HUjZBCCvjmUBzXBzLxF1dHKgjudRhiDPjiPTBGvFxAvV6nA3iCdwThhyPAl84I5MGPVVTngo1k4yAbyMOp5nSC/u/KJkwoT9tLv9EIGPQBLEfdaE5dMyZTP6R/MfkksZXV33pAjH5FNZEzbOll4GmDY2v33GICZVviHazyYkQ3GHyfWNs/X1b33Exqb5I2PF8ssk+Gq4fCYh+eC3tAk3ztaXTLlm29g0fwwhNvDbjOoLiq+lzTc/v0c++gcq2RPAJeKoNqCFSDvqxiY2YL9F8amkP56MpvPRdMVd/okALtmO2tgkP5pWTDLWVLeDfAgOahOSYfgr7aSnOy6i6age4NL6JuOmqFl/iO6gNiHJFb8sU4TlhQBiALCRXDStJWFAS+TzD5maO4i4xAPEHIgT/BHoaOB8frirKJdZxDCgOV6xAE8oA2J5qCUSSoGalLXi+uYGC4iWEau7CXmoX9FAVTdtRcCCVkRCAexSHpqR8FCDFf+VHT6hacVznxAEXFjAAByqeKg9UbHXqTf7k9GoVquNRpN+s97ZG3A4Iwn9PBiobvAJX0gDWnCd/ojzOaN+ZxCmjPJSt5KJQjzVBzyRG4LmVx90hDNp1Ul9MG/IEtKAS1Sn4fqxflEjlwUNY48ztxRWrb8XtCQ3W1Au6hdwDKF2ny8DyJlVioJsDnxI55+O2IwfAIwYi2XdGTeJLGHMj3kjL0qjMfFWt2q7Ygg3AqXaucfIWlG3ahMDGoO65Gx9SLW6zWh0nR/Z9pCqRXeoTiPoyXoNotBFjflmXD5L1ab5CUbf+WGf0z1ZlYyf+teXTmkjJgpouK2dhuqGG0yP6A54gXimU6p5Bdz6GT05pVWWitKE0dGxn6tqx53FuGLaJxvRLdWIFdfP6MKmca7xqwWJ3hjEiS+QuiQOs5OJFqJfi9pWZAG18n10qYbhoCEtsx3ieS3QTViIZ0xzodMddinADAu4p5b/5PRraHGbIiqf/sR2T+X4cxjVFgXIdhN1NKqgwkmfneNmAHUW2CIToTdJja030TsUwor/qwQdvVFHg6KlsnyotTAzEfVLblOHrW/b0kvApo/Gz4W16EGYpBXfyK8glp/FDzNS/UQdDyuocDzlEsavSOUmLZJy1LeSiBoldzUyE34miOUFjZ5Cemp7ho5aPtUAVJhYSwpxvy3Y2LbxUmM9RlDM3I+jHl21I5JGuay1ViE5s0YIE0v9bw7bHDOWG//SWlCrSYYZh28snD2MraPfltvAaCw3vtfpCOcUwoxlvyT6i4D2r35oH7sb2RfsXd7lM911e27PFJqpnq8jMIh0tP/26vC43W43GhsLp9+/QdiWwDXhmEbkTGAcXd5dPLqdTm9ubr4y/zed3j66uLvU+0pHr3Z2zs93XuGsZnc5mcIMKPUAojHoht5692H67vfrxV6vlwvK/HHx+vd3tx80ObHE6QoNaxGz4yGG2sO75+8WcyZZfjG/GJb5ryZpbvHd89lT8kahYYcU14pMhriYXptwABkrE/N6ejcLLl+cUehOOjmI1BTU5e37Xg4yHKx8rvf+VteSGgmKlwvdPUs2YrCMubxZVMBzIRdvJBmhZFSdjI34iJxyxvDnRU3Egf/6KWy+PCXQkFOp79M1xv3gIwzVSXPPWkiOPY9ZpSzoVaRU7Vn3cS+u2cFn4mxtba2YKhaL2WypVMoWV7a2bGb6lb3rC5lv1LEXxgfjcacz3hvMu+vHA/E7YXGaCtop+u7/eU7bz4RbKa5aXGuVQuFBUIVCpbSyRVPmc48kvlGVLL8xOwCMifitoHYpE7pOyvGJ257/hfP5rZWspdIazUZprbgVgMz3ZBDr4BaOuJOZI06cAV/8oefbw8WrROARa2Z9yHxPxlEhQFPxCmI4znBMeO1ZY6vo8AnxiCVXPMT3El+qCRsxXqzhdL5gaHZNmN+y8YqyfJYqW4RRxohV2IZ74neGBdcznL/WDQmjjn9mK/J8lrLOm3MyOYMzEuO4KScZwtmVEDoWzK5F8hTWQvFnyyH8WuJr1UAbxnJT0El5UWtKbEgQSxGAa+Y4LVJ/A9dNc7cy32sMzhTFSIkcJ+Us8154oVTkpwU7EBUDVix6aV+qCh9huSmc7rl/qt/deia/6CDwGCuMI5e8Biv3Tu6bDUDCvviNjMB0z3f3Sz955518UYRdtVIM2rjiN5D5Rcn6G0wY6km/RgF6w5DvCxd+0ZZ3PLUIZwzHhuS/lfw35WQ7xRropsoDEZ6+iEo7d4s5mjALE1ayRd+FPcLctXwrvAe6qepGEHDNV+DsN6Q0DREy+aHiD1FCmM/dKHy3PuimqvkC7u4FAevD+zxEaOcHOPA4hPn3Ur2TKzAlqg5EeLFC6Otf5QDCcH5gCaVSfUBgNFUciOD8hXhNAiRci8iQ8Qg7oJuqzWWA2dAIT4rKE8JuGo9wAhKqtcEvoGEo/itFeGk2YhyqElYRQg0YaMSeDhKaSb7IK3FK+bw1O6xICA5ExaVLKN9LfARMSOUHWtne4vt30+dKoXSOMxDVQg0YaMSlH4+Qp8If8ZYvwIwIT69wBIdScdWgRlj4Ju5sN9hfKAVTcJOXIX6fCmHhz/iz+XCoUanbwGQh4ecqhD/G5pvjhBqVdAESSsz2yBP+pbccAxXfSi0iNEcjE42lCf+KzeYICqZKCRFKhzL7SKIJCxV3jpgCfP349vb28WslQmjGTSkhQg2+zJ8okrDitRgF30XvPmZXLa1VHnyjAAn1+UrdxQGU8CXcPIrQbzEKXpC5/Li66lXlBYXoCiZElWlhkFAiVEURVrwW40/35a+zq8wLZQMsWHurFDUgoUS6kSL0fPRHhy84Y1V4LPcFwZSvQgj1v7qEnpd+Q178OgwY9OAZEErMucpEmoI75ZQtQq8qSI1FcL5NhTCTBCHJFn+T135chVv/v7mfLiJUKb0TsSE90i4dwHBjLOWn2jZMYhy6ACTr/dshBJap/oz+Hba0x2ESsdQlJC91XgLOwEmMxGQINfMhESnYXvOcVM5Nk8mHmjUN7YOfoFRBCP8j/kXaNU0idakjkg0fcYeh2fqLf5F2XYrcWxT8mSg3lHqEhZLz4sDmDQlC7d4Ctz80U33RnRBmCdf8DW+5rDyhdn+I2uOTcg0mpHZ+VaQJtXt81HkaalafIVyhCIvShACg2jwN6lwbtTKDRKg914Y6X0qtrjGEJYpwTZZQf74Ud847uELKEFZKgb21RelIA68CqwDChWnsdYvAKnc4W5hx1pbfZYgJEdYtUNeeqHTOEgISEyKsPWGuH+ITYqwfYq4B4xNirAFjruPjE2Ks42PuxcAnxNiLEW8/jUxvgUCIsp8m1p4ol3DRfsRiZaUE6RNLuOb+F+neAmdPFLivTfh3cjfSkhoFUO85TVgJvKokSYizrw3em8jZA+0p+EwCrBxDSP1F5HoLzt5E5Yef4P2lAjc9EgGyhHEqb6T9pap7hIluRUZEIMTaI8zZ5y2KptMe9PQalzBGb4G2z5uzV19Y/D26pp/7ZcREGqq3WJGKNGN4GKoDqj1vEdSH6dd8fXVBEa49qBSd1LLiP6FACOHfBD80E+t5C6VnZpQlkfEnoL8gPjPDee4p9tOMtCRmhPtQHcx57inet+I8u6YetCBJzOrXoWNEUJ9d4zx/iGREh7AIELorM2ZICSPCJoznpNxnSHGMyFsg9ZdIrbzHxm7cZ0i5hwvFxwqI66aukzrFGW1FsLnXeA6Y9yx3XfhOGf3BMaK7X4qMOOq3ga2vzt+cd7wQyjE0l1nQiO4asVecBRwVLmd0/uScMxWe4JwDCSYMb/HQn4vxEcGKVHn+ghLvXAycYPPYRqSecfPXDgNNoGsjOFPonb7FPWEI5zSoT6tF2or+8i/VxzuIcF8YP1U44hkR6bzSy38cRrKm8Ze3O5EpXWwzDTgm1Psu3DOGsA4N/vGf4upqcTVbKTz4O7BDgW0gmDONqP+keT4z95worHOf5y4/fbT0KbjHJExjjGE+fXfijkSk4g0UuA+BR6idunhGNGIdYyAlXl4HAfWPMeSeuZfU+YFVuInnCSGqc09iR8qKjGpcfwRNiBHx+Gdfxi54I6Xio0jRoM89v1Q3UMPipQXIhEh/44jDIWeLiHZaatQ5wrNFRDtKNOqc3RkiYsaBCD9NJtzIIKKe6Bt1JnsySUMCUX21KUpR5+onk/qFiOJ9E2qKuhshmQJOgIh/JUrU/RZ4N8wEFVm9JXCjhuBYb/xLZuqRJsQdhI4E98yMcX9ljdPRu0rk1GnBXUHzmDG1GXHH5XxSKUp83xPadUGjPUGUSSRBWRIcQI90pHdV1F0kdrL9nMS9awgRpx7toMi1TEjiu/MGWh5k350nAEzq5iUimfsPY98PWK2LG/ykASXvsOzEiTneHZazBZS+h7SvZkjqHtLZAkrfJTs/jnuXbARgokHGl8J9wPWuyJTh+4AjAOv3gWcp2Tud+R+WWKIPK+693N3gvdzzkfePA0qoVIOV5N3qnPcPEr7ihVVVImtgCrt3kZHgRkRkwAQuORVrQnlqS8JTY/MBl7zci6ryNyXpAaJcMxxPw4cPE/dU435jKKvkzThLAzoaJjoajcFMDeio+iIxV8VoqFFU26YYsVzVmL2D+uriMxrGOJFlrdiiGVu6jJ8dnyVEO5r+ec9FqKRqJxmKMV5cNWvy+ucz/lhVh7uazmpdgzlrCoFGJwdBSCVDmn1k8/N0T0bdk5Y6pPHF4DkaDXczD31MgbtadPLzVp+Nat0X26YtXcxWC7SlPcUxbo4+39gSrWptSDAd1NbTp0+eeGT2NFUzuft171G1yXB4sr17cNCyFpJbB0+fmGT9yRdruFSpUqVKlSpVqlSpUqVKlSpVqlSpAP0XbK83M5OreEkAAAAASUVORK5CYII="
        />
      </div> */}

      <h3
        className="text-md
      md:text-lg
        
          font-bold text-slate-800 mb-4 mt-8"
      >
        ยิ่งซิ้อเยอะ ยิ่งคุ้ม
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ProductSellCard
          name="ปลากระพงขาวใหญ่แช่แข็ง"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F12baef051eb34994b836853a0b60c5ea&w=1920&q=75"
          types={["keto", "low-carb"]}
        />
        <ProductSellCard
          name="หอมใหญ่นอก ยกกระสอบ"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F0e94e9d01d3f44e89dc2f7dfd58df1f8&w=1920&q=75"
          types={["vegetarian", "vegan"]}
        />
        <ProductSellCard
          name="กระเทียมจีนตัดจุก"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2Ff9a90963c24d4ce781ec5b3f3e39d3fc&w=1920&q=75"
          types={["vegetarian", "vegan"]}
        />
        <ProductSellCard
          name="เอโร่ หมูบดแช่แข็ง 1 กก."
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F5e49563d25fb4ffd9bc363b5104b50d7&w=3840&q=75"
          types={["keto", "low-carb"]}
        />
        <ProductSellCard
          name="ปลากระพงขาวใหญ่แช่แข็ง"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F12baef051eb34994b836853a0b60c5ea&w=1920&q=75"
          types={["keto", "low-carb"]}
        />
        <ProductSellCard
          name="หอมใหญ่นอก ยกกระสอบ"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F0e94e9d01d3f44e89dc2f7dfd58df1f8&w=1920&q=75"
          types={["vegetarian", "vegan"]}
        />
        <ProductSellCard
          name="กระเทียมจีนตัดจุก"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2Ff9a90963c24d4ce781ec5b3f3e39d3fc&w=1920&q=75"
          types={["vegetarian", "vegan"]}
        />
        <ProductSellCard
          name="เอโร่ หมูบดแช่แข็ง 1 กก."
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F5e49563d25fb4ffd9bc363b5104b50d7&w=3840&q=75"
          types={["keto", "low-carb"]}
        />
        <ProductSellCard
          name="ปลากระพงขาวใหญ่แช่แข็ง"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F12baef051eb34994b836853a0b60c5ea&w=1920&q=75"
          types={["keto", "low-carb"]}
        />
        <ProductSellCard
          name="หอมใหญ่นอก ยกกระสอบ"
          image="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F0e94e9d01d3f44e89dc2f7dfd58df1f8&w=1920&q=75"
          types={["vegetarian", "vegan"]}
        />
      </div>
    </div>
  );
};

export default Page;
