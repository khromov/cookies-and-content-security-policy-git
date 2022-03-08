# sh watch-compressed.sh
find ../../. -name "._*" -type f -delete
sass --watch --style compressed cookies-and-content-security-policy.scss:../css/cookies-and-content-security-policy.min.css cookies-and-content-security-policy-admin.scss:../css/cookies-and-content-security-policy-admin.min.css -C