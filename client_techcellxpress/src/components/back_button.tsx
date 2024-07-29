'use client'

import { useRouter } from 'next/navigation'
import BackArrowSvg from 'svg/back_arrow_svg'
import Icon from "cp/icon";
import Styles from "st/back_button.module.css"

export default function BackButton() {
  const router = useRouter()
  return (
    <button id="back-btn" onClick={() => { router.back() }} className={Styles.btn} >
      <div className="arrow_back">
        <BackArrowSvg />
      </div>
    </button >
  )
}