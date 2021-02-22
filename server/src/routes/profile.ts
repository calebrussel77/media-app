import {Router} from 'express';
import { acceptFriendRequest, sendFriendRequest, fetch, getNotifications, getFriendRequests, getFriends } from '../controllers/profile';
import {loginRequired, isAuthenticated, userById, profileById} from '../middlewares/user'
import {check} from 'express-validator';

const router = Router();

router.get("/profile/:userId", loginRequired, isAuthenticated, fetch);

router.get("/profile/notifications/:userId/:profileId", loginRequired, isAuthenticated, getNotifications);

router.get("/profile/friend_requests/:userId/:profileId", loginRequired, isAuthenticated, getFriendRequests);

router.get("/profile/friends/:userId/:profileId", loginRequired, isAuthenticated, getFriends);

router.post("/profile/send_friend_request/:userId/:profileId", loginRequired, isAuthenticated, [
    check('receiverProfileId', 'Profile ID of receiver required').notEmpty(),
    check('receiverProfileId', 'Profile ID of receiver must be intiger').isInt()
], sendFriendRequest);

router.post("/profile/accept_friend_request/:userId/:profileId", loginRequired, isAuthenticated, [
    check('senderProfileId', 'Profile ID of sender required').notEmpty(),
    check('senderProfileId', 'Profile ID of sender must be intiger').isInt()
],acceptFriendRequest);

router.param("userId", userById);
router.param("profileId", profileById);

export default router;